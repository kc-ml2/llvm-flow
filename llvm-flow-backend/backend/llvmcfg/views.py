from pyexpat import native_encoding
import shutil
from sre_constants import SUCCESS
import subprocess
from django.http import HttpResponse
from django.shortcuts import render
from django.urls import reverse
from rest_framework import generics
from .models import FileModel, PassModel, IdentifierModel
from django.conf import settings
from .service import read_beforell, read_afterll, read_json,before_output, after_output
import os 
from django.http import JsonResponse
import json
from .serializers import IdentifierSerializer


SCRIPT_CMD_C = "cd {}; clang-10 -O0 -g -Xclang -disable-O0-optnone -emit-llvm -S *.c; rm *.c; llvm-link *.ll -S -o beforeg.ll; opt beforeg.ll -S {} -o afterg.ll; ../llvm-block/llvm-block beforeg.ll afterg.ll 2> output.tsv; opt -S beforeg.ll -o before.ll -strip-debug; opt -strip-debug -S afterg.ll -o after.ll; mkdir before after; opt -dot-cfg before.ll; mv .*.dot before; opt -dot-cfg after.ll; mv .*.dot after; cd before; dot -Txdot_json -o before.json .*.dot; cd ../after; dot -Txdot_json -o after.json .*.dot"
SCRIPT_CMD_CPP = "cd {}; clang-10 -O0 -g -Xclang -disable-O0-optnone -emit-llvm -S *.cpp; rm *.cpp; llvm-link *.ll -S -o beforeg.ll; opt beforeg.ll -S {} -o afterg.ll; ../llvm-block/llvm-block beforeg.ll afterg.ll 2> output.tsv; opt -S beforeg.ll -o before.ll -strip-debug; opt -strip-debug -S afterg.ll -o after.ll; mkdir before after; opt -dot-cfg before.ll; mv .*.dot before; opt -dot-cfg after.ll; mv .*.dot after; cd before; dot -Txdot_json -o before.json .*.dot; cd ../after; dot -Txdot_json -o after.json .*.dot"
SCRIPT_CMD_LL = "cd {}; mv {} beforeg.ll; opt beforeg.ll -S {} -o afterg.ll; ../llvm-block/llvm-block beforeg.ll afterg.ll 2> output.tsv; opt -S beforeg.ll -o before.ll -strip-debug; opt -strip-debug -S afterg.ll -o after.ll; mkdir before after; opt -dot-cfg before.ll; mv .*.dot before; opt -dot-cfg after.ll; mv .*.dot after; cd before; dot -Txdot_json -o before.json .*.dot; cd ../after; dot -Txdot_json -o after.json .*.dot"



class CheckSameUser(generics.CreateAPIView):
    """
    check if the value already exists
    """
    queryset = IdentifierModel.objects.all()
    serializer_class = IdentifierSerializer
    
    def post(self, request, *args, **kwargs):   
        
        if IdentifierModel.objects.filter(Identifier=request.data['Identifier']).exists():
            return JsonResponse({'status': 1})
        else: 
            return JsonResponse({'status':0})
        
        
        

        

# .c file
class UploadAPIViewC(generics.CreateAPIView):
    """
    upload cfile & command line & send output to frontend
    """
    queryset = IdentifierModel.objects.all()
    serializer_class = IdentifierSerializer

    def post(self, request, *args, **kwargs):
        data = {
            'transformpass': request.POST.get('transformpass'),
            'contents': request.FILES.getlist('content'),
            'profileLabel': request.POST.get('profileLabel'),
            }
        
        if data:
            file_data = data.get('contents')
            
            Identifier_instance =  IdentifierModel.objects.create(Identifier=data.get('profileLabel') )

            Pass_instance = PassModel.objects.create(Identifier_field=Identifier_instance, 
                transformpass=data.get('transformpass'),
            )

            File_instances = [FileModel.objects.create(Identifier_field=Identifier_instance, content=d) for d in file_data]
            
            current_id =File_instances[0].id

            file_path = FileModel._meta.get_field('content').value_from_object(FileModel.objects.get(id=current_id))

            file_save_path = os.path.dirname(os.path.join(settings.MEDIA_ROOT, str(file_path)))
            file_pass = str(Pass_instance.transformpass)

            try:
                subprocess.run([SCRIPT_CMD_C.format(file_save_path, file_pass)], stdout=subprocess.PIPE, shell=True, check=True)
                
                JSONdata = {
                'before_json' : read_json(os.path.join(file_save_path, 'before/before.json')),
                'after_json' : read_json(os.path.join(file_save_path, 'after/after.json')),
                'before_output': before_output(os.path.join(file_save_path, 'output.tsv')),
                'after_output': after_output(os.path.join(file_save_path, 'output.tsv')),
                'beforeg_data': read_beforell(os.path.join(file_save_path)),
                'afterg_data': read_afterll(os.path.join(file_save_path)),
                'file_pass': file_pass,
                }

                return JsonResponse(JSONdata, safe=False)

            except:
                # delete uploaded file & Cfile, LLVMpass object
                FileModel.objects.filter(id=current_id).delete()
                PassModel.objects.filter(id=current_id).delete()
                IdentifierModel.objects.filter(id=Identifier_instance.id).delete()
                shutil.rmtree(file_save_path)
                return JsonResponse("error", safe=False)

        else:
            return HttpResponse("제출 양식을 다시 확인해 주세요.")

# .cpp file
class UploadAPIViewCPP(generics.CreateAPIView):
    """
    upload cppfile & command line & send output to frontend
    """
    queryset = IdentifierModel.objects.all()
    serializer_class = IdentifierSerializer

    def post(self, request, *args, **kwargs):
        data = {
            'transformpass': request.POST.get('transformpass'),
            'contents': request.FILES.getlist('content'),
            'profileLabel': request.POST.get('profileLabel'),
            }
        
        if data:
            file_data = data.get('contents')
                        
            Identifier_instance =  IdentifierModel.objects.create(Identifier=data.get('profileLabel') )

            Pass_instance = PassModel.objects.create(Identifier_field=Identifier_instance, 
                transformpass=data.get('transformpass'),
            )

            File_instances = [FileModel.objects.create(Identifier_field=Identifier_instance, content=d) for d in file_data]
            
            current_id =File_instances[0].id

            file_path = FileModel._meta.get_field('content').value_from_object(FileModel.objects.get(id=current_id))

            file_save_path = os.path.dirname(os.path.join(settings.MEDIA_ROOT, str(file_path)))
            file_pass = str(Pass_instance.transformpass)

            try:
                subprocess.run([SCRIPT_CMD_CPP.format(file_save_path, file_pass)], stdout=subprocess.PIPE, shell=True, check=True)

                JSONdata = {
                'before_json' : read_json(os.path.join(file_save_path, 'before/before.json')),
                'after_json' : read_json(os.path.join(file_save_path, 'after/after.json')),
                'before_output': before_output(os.path.join(file_save_path, 'output.tsv')),
                'after_output': after_output(os.path.join(file_save_path, 'output.tsv')),
                'beforeg_data': read_beforell(os.path.join(file_save_path)),
                'afterg_data': read_afterll(os.path.join(file_save_path)),
                'file_pass': file_pass,
                }

                return JsonResponse(JSONdata, safe=False)

            except:
                # delete uploaded file & Cfile, LLVMpass object
                FileModel.objects.filter(id=current_id).delete()
                PassModel.objects.filter(id=current_id).delete()
                IdentifierModel.objects.filter(id=Identifier_instance.id).delete()
                shutil.rmtree(file_save_path)
                return JsonResponse("error", safe=False)

        else:
            return HttpResponse("제출 양식을 다시 확인해 주세요.")

# .ll file
class UploadAPIViewLL(generics.CreateAPIView):
    """
    upload llfile & command line & send output to frontend
    """
    queryset = IdentifierModel.objects.all()
    serializer_class = IdentifierSerializer

    def post(self, request, *args, **kwargs):
        data = {
            'transformpass': request.POST.get('transformpass'),
            'contents': request.FILES.getlist('content'),
            'profileLabel': request.POST.get('profileLabel'),
            }
        
        if data:
            file_data = data.get('contents')
            
            Identifier_instance =  IdentifierModel.objects.create(Identifier=data.get('profileLabel') )

            Pass_instance = PassModel.objects.create(Identifier_field=Identifier_instance, 
                transformpass=data.get('transformpass'),
            )

            File_instances = [FileModel.objects.create(Identifier_field=Identifier_instance, content=d) for d in file_data]
            
            current_id =File_instances[0].id

            file_path = FileModel._meta.get_field('content').value_from_object(FileModel.objects.get(id=current_id))

            file_save_path = os.path.dirname(os.path.join(settings.MEDIA_ROOT, str(file_path)))
            file_pass = str(Pass_instance.transformpass)

            try:
                subprocess.run([SCRIPT_CMD_LL.format(file_save_path, file_data[0], file_pass)], stdout=subprocess.PIPE, shell=True, check=True)

                JSONdata = {
                'before_json' : read_json(os.path.join(file_save_path, 'before/before.json')),
                'after_json' : read_json(os.path.join(file_save_path, 'after/after.json')),
                'before_output': before_output(os.path.join(file_save_path, 'output.tsv')),
                'after_output': after_output(os.path.join(file_save_path, 'output.tsv')),
                'beforeg_data': read_beforell(os.path.join(file_save_path)),
                'afterg_data': read_afterll(os.path.join(file_save_path)),
                'file_pass': file_pass,
                }

                return JsonResponse(JSONdata, safe=False)

            except:
                # delete uploaded file & Cfile, LLVMpass object
                FileModel.objects.filter(id=current_id).delete()
                PassModel.objects.filter(id=current_id).delete()
                IdentifierModel.objects.filter(id=Identifier_instance.id).delete()
                shutil.rmtree(file_save_path)
                return JsonResponse("error", safe=False)

        else:
            return HttpResponse("제출 양식을 다시 확인해 주세요.")

class AllProfileAPIView(generics.CreateAPIView):
    """
    profile list (every users)
    """
    queryset = IdentifierModel.objects.all()
    serializer_class = IdentifierSerializer
    
    def get(self, requrest, *args, **kwargs):
        
        identifiers = list(IdentifierModel.objects.all())
        passOptions = list(PassModel.objects.all())
        fileDatas = list(FileModel.objects.all())
        
        id2name = {identifier.id:identifier.Identifier for identifier in identifiers}
        id2pass = {pass_option.Identifier_field.id:pass_option.transformpass for pass_option in passOptions}
        id2filenames = {}
        for file_data in fileDatas:
            identifier = file_data.Identifier_field.id
            filename = str(file_data.content)
            if identifier in id2filenames:
                id2filenames[identifier].append(filename.split('/')[1])
            else:
                id2filenames[identifier] = [filename]
        id2filenames = {key: ' '.join(value) for key, value in id2filenames.items()}
        
        assert set(id2name.keys()) == set(id2pass.keys()) == set(id2filenames.keys())
        
        zipData = []
        for key in sorted(id2name.keys()):
            zipData.append((id2pass[key], key, id2filenames[key], id2name[key]))
        JSONdata = {
            'data' : zipData
        }
        
        if JSONdata: 
            return JsonResponse(JSONdata, safe=False)
        else: 
            return HttpResponse("Error", safe=False)


class ProfileAPIView(generics.CreateAPIView):
    """
    profile list (specific users)
    """
    queryset = IdentifierModel.objects.all()
    serializer_class = IdentifierSerializer
   
    def get(self, request, *args, **kwargs):
        # Model에서 request.user와 일치하는 데이터만 뽑아오기
        identifier = request.GET.get('Identifier', None)
        assert identifier is not None, "no identifier provided"
    
        filterID = list(IdentifierModel.objects.filter(Identifier=identifier).values('id'))
        filterID = [item['id'] for item in filterID]
        search_results = []
        for id in filterID:
            passOption = list(PassModel.objects.filter(Identifier_field__id=id).values('transformpass'))[0]['transformpass']
            FileData = list(FileModel.objects.filter(Identifier_field__id=id).values('content'))
            datetime = FileData[0]['content'].split('/')[0]
            filenames = datetime + '/' + ' '.join(file_data['content'].split('/')[1] for file_data in FileData)
            search_results.append((passOption, id, filenames, identifier))
            
        JSONdata = {
            'data' : search_results
        }
        
        if JSONdata: 
            return JsonResponse(JSONdata, safe=False)
        else: 
            return HttpResponse("Error", safe=False)

class ShowAPIView(generics.CreateAPIView):
    """
    show again the graph that selected at board
    """
    queryset = IdentifierModel.objects.all()
    serializer_class = IdentifierSerializer

    def post(self, request, *args, **kwargs):
        data = {
            'path': request.POST.get('path'),
            'passOption': request.POST.get('passOption'),
            'filterID': request.POST.get('filterID'),
            }

        if data:
            path = data.get('path')
            passOption = data.get('passOption')
           
            JSONdata = {
                'before_json' : read_json(os.path.join(settings.MEDIA_ROOT, str(path), 'before/before.json')),
                'after_json' : read_json(os.path.join(settings.MEDIA_ROOT, str(path), 'after/after.json')),
                'before_output': before_output(os.path.join(settings.MEDIA_ROOT, str(path), 'output.tsv')),
                'after_output': after_output(os.path.join(settings.MEDIA_ROOT, str(path), 'output.tsv')),
                'beforeg_data': read_beforell(os.path.join(settings.MEDIA_ROOT, str(path))),
                'afterg_data': read_afterll(os.path.join(settings.MEDIA_ROOT, str(path))),
                'file_pass': passOption,
            }

            return JsonResponse(JSONdata, safe=False)
        else:
            return HttpResponse("Error", safe=False)


class DeleteAPIview(generics.DestroyAPIView):
    """
    delete the file at board
    """
    queryset = IdentifierModel.objects.all()

    def destroy(self, request, *args, **kwargs):
        data = json.loads(request.body)

        if data:
            IdentifierModel.objects.filter(id=data['filterID']).delete()
            file_pass = data['folder']

            shutil.rmtree(os.path.join(settings.MEDIA_ROOT ,file_pass))

            return HttpResponse("Success")

        else:
            return HttpResponse("Failed")

