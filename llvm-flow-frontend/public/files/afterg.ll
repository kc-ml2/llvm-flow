; ModuleID = 'beforeg.ll'
source_filename = "llvm-link"
target datalayout = "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-f80:128-n8:16:32:64-S128"
target triple = "x86_64-pc-linux-gnu"

%struct._IO_FILE = type { i32, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, %struct._IO_marker*, %struct._IO_FILE*, i32, i32, i64, i16, i8, [1 x i8], i8*, i64, %struct._IO_codecvt*, %struct._IO_wide_data*, %struct._IO_FILE*, i8*, i64, i32, [20 x i8] }
%struct._IO_marker = type opaque
%struct._IO_codecvt = type opaque
%struct._IO_wide_data = type opaque

@.str = private unnamed_addr constant [27 x i8] c"Enter number of students: \00", align 1
@.str.1 = private unnamed_addr constant [3 x i8] c"%d\00", align 1
@.str.2 = private unnamed_addr constant [15 x i8] c"C:\\student.txt\00", align 1
@.str.3 = private unnamed_addr constant [2 x i8] c"w\00", align 1
@.str.4 = private unnamed_addr constant [7 x i8] c"Error!\00", align 1
@.str.5 = private unnamed_addr constant [27 x i8] c"For student%d\0AEnter name: \00", align 1
@.str.6 = private unnamed_addr constant [3 x i8] c"%s\00", align 1
@.str.7 = private unnamed_addr constant [14 x i8] c"Enter marks: \00", align 1
@.str.8 = private unnamed_addr constant [22 x i8] c"\0AName: %s \0AMarks=%d \0A\00", align 1

; Function Attrs: noinline nounwind uwtable
define dso_local i32 @main() local_unnamed_addr #0 !dbg !9 {
  %1 = alloca i32, align 4
  %2 = alloca [50 x i8], align 16
  %3 = alloca i32, align 4
  %4 = alloca i32, align 4
  %5 = alloca i32, align 4
  %6 = alloca %struct._IO_FILE*, align 8
  store i32 0, i32* %1, align 4
  call void @llvm.dbg.declare(metadata [50 x i8]* %2, metadata !13, metadata !DIExpression()), !dbg !18
  call void @llvm.dbg.declare(metadata i32* %3, metadata !19, metadata !DIExpression()), !dbg !20
  call void @llvm.dbg.declare(metadata i32* %4, metadata !21, metadata !DIExpression()), !dbg !22
  call void @llvm.dbg.declare(metadata i32* %5, metadata !23, metadata !DIExpression()), !dbg !24
  %7 = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([27 x i8], [27 x i8]* @.str, i64 0, i64 0)), !dbg !25
  %8 = call i32 (i8*, ...) @__isoc99_scanf(i8* getelementptr inbounds ([3 x i8], [3 x i8]* @.str.1, i64 0, i64 0), i32* %5), !dbg !26
  call void @llvm.dbg.declare(metadata %struct._IO_FILE** %6, metadata !27, metadata !DIExpression()), !dbg !88
  %9 = call %struct._IO_FILE* @fopen(i8* getelementptr inbounds ([15 x i8], [15 x i8]* @.str.2, i64 0, i64 0), i8* getelementptr inbounds ([2 x i8], [2 x i8]* @.str.3, i64 0, i64 0)), !dbg !89
  store %struct._IO_FILE* %9, %struct._IO_FILE** %6, align 8, !dbg !90
  %10 = load %struct._IO_FILE*, %struct._IO_FILE** %6, align 8, !dbg !91
  %11 = icmp eq %struct._IO_FILE* %10, null, !dbg !93
  br i1 %11, label %12, label %14, !dbg !94

12:                                               ; preds = %0
  %13 = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([7 x i8], [7 x i8]* @.str.4, i64 0, i64 0)), !dbg !95
  call void @exit(i32 1) #4, !dbg !97
  unreachable, !dbg !97

14:                                               ; preds = %0
  store i32 0, i32* %4, align 4, !dbg !98
  br label %15, !dbg !100

15:                                               ; preds = %19, %14
  %16 = load i32, i32* %4, align 4, !dbg !101
  %17 = load i32, i32* %5, align 4, !dbg !103
  %18 = icmp slt i32 %16, %17, !dbg !104
  br i1 %18, label %19, label %33, !dbg !105

19:                                               ; preds = %15
  %20 = load i32, i32* %4, align 4, !dbg !106
  %21 = add nsw i32 %20, 1, !dbg !108
  %22 = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([27 x i8], [27 x i8]* @.str.5, i64 0, i64 0), i32 %21), !dbg !109
  %23 = getelementptr inbounds [50 x i8], [50 x i8]* %2, i64 0, i64 0, !dbg !110
  %24 = call i32 (i8*, ...) @__isoc99_scanf(i8* getelementptr inbounds ([3 x i8], [3 x i8]* @.str.6, i64 0, i64 0), i8* %23), !dbg !111
  %25 = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([14 x i8], [14 x i8]* @.str.7, i64 0, i64 0)), !dbg !112
  %26 = call i32 (i8*, ...) @__isoc99_scanf(i8* getelementptr inbounds ([3 x i8], [3 x i8]* @.str.1, i64 0, i64 0), i32* %3), !dbg !113
  %27 = load %struct._IO_FILE*, %struct._IO_FILE** %6, align 8, !dbg !114
  %28 = getelementptr inbounds [50 x i8], [50 x i8]* %2, i64 0, i64 0, !dbg !115
  %29 = load i32, i32* %3, align 4, !dbg !116
  %30 = call i32 (%struct._IO_FILE*, i8*, ...) @fprintf(%struct._IO_FILE* %27, i8* getelementptr inbounds ([22 x i8], [22 x i8]* @.str.8, i64 0, i64 0), i8* %28, i32 %29), !dbg !117
  %31 = load i32, i32* %4, align 4, !dbg !118
  %32 = add nsw i32 %31, 1, !dbg !118
  store i32 %32, i32* %4, align 4, !dbg !118
  br label %15, !dbg !119, !llvm.loop !120

33:                                               ; preds = %15
  %34 = load %struct._IO_FILE*, %struct._IO_FILE** %6, align 8, !dbg !122
  %35 = call i32 @fclose(%struct._IO_FILE* %34), !dbg !123
  ret i32 0, !dbg !124
}

; Function Attrs: nounwind readnone speculatable willreturn
declare void @llvm.dbg.declare(metadata, metadata, metadata) #1

declare dso_local i32 @printf(i8*, ...) local_unnamed_addr #2

declare dso_local i32 @__isoc99_scanf(i8*, ...) local_unnamed_addr #2

declare dso_local %struct._IO_FILE* @fopen(i8*, i8*) local_unnamed_addr #2

; Function Attrs: noreturn
declare dso_local void @exit(i32) local_unnamed_addr #3

declare dso_local i32 @fprintf(%struct._IO_FILE*, i8*, ...) local_unnamed_addr #2

declare dso_local i32 @fclose(%struct._IO_FILE*) local_unnamed_addr #2

attributes #0 = { noinline nounwind uwtable "correctly-rounded-divide-sqrt-fp-math"="false" "disable-tail-calls"="false" "frame-pointer"="all" "less-precise-fpmad"="false" "min-legal-vector-width"="0" "no-infs-fp-math"="false" "no-jump-tables"="false" "no-nans-fp-math"="false" "no-signed-zeros-fp-math"="false" "no-trapping-math"="false" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "unsafe-fp-math"="false" "use-soft-float"="false" }
attributes #1 = { nounwind readnone speculatable willreturn }
attributes #2 = { "correctly-rounded-divide-sqrt-fp-math"="false" "disable-tail-calls"="false" "frame-pointer"="all" "less-precise-fpmad"="false" "no-infs-fp-math"="false" "no-nans-fp-math"="false" "no-signed-zeros-fp-math"="false" "no-trapping-math"="false" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "unsafe-fp-math"="false" "use-soft-float"="false" }
attributes #3 = { noreturn "correctly-rounded-divide-sqrt-fp-math"="false" "disable-tail-calls"="false" "frame-pointer"="all" "less-precise-fpmad"="false" "no-infs-fp-math"="false" "no-nans-fp-math"="false" "no-signed-zeros-fp-math"="false" "no-trapping-math"="false" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "unsafe-fp-math"="false" "use-soft-float"="false" }
attributes #4 = { noreturn }

!llvm.dbg.cu = !{!0}
!llvm.ident = !{!5}
!llvm.module.flags = !{!6, !7, !8}

!0 = distinct !DICompileUnit(language: DW_LANG_C99, file: !1, producer: "Ubuntu clang version 10.0.1-++20211003085942+ef32c611aa21-1~exp1~20211003090334.2", isOptimized: false, runtimeVersion: 0, emissionKind: FullDebug, enums: !2, retainedTypes: !3, splitDebugInlining: false, nameTableKind: None)
!1 = !DIFile(filename: "example.c", directory: "/home/ubuntu/llvm-flow-api/backend/llvm-block/build@10/20230106-1412090")
!2 = !{}
!3 = !{!4}
!4 = !DIDerivedType(tag: DW_TAG_pointer_type, baseType: null, size: 64)
!5 = !{!"Ubuntu clang version 10.0.1-++20211003085942+ef32c611aa21-1~exp1~20211003090334.2"}
!6 = !{i32 7, !"Dwarf Version", i32 4}
!7 = !{i32 2, !"Debug Info Version", i32 3}
!8 = !{i32 1, !"wchar_size", i32 4}
!9 = distinct !DISubprogram(name: "main", scope: !1, file: !1, line: 2, type: !10, scopeLine: 3, spFlags: DISPFlagDefinition, unit: !0, retainedNodes: !2)
!10 = !DISubroutineType(types: !11)
!11 = !{!12}
!12 = !DIBasicType(name: "int", size: 32, encoding: DW_ATE_signed)
!13 = !DILocalVariable(name: "name", scope: !9, file: !1, line: 4, type: !14)
!14 = !DICompositeType(tag: DW_TAG_array_type, baseType: !15, size: 400, elements: !16)
!15 = !DIBasicType(name: "char", size: 8, encoding: DW_ATE_signed_char)
!16 = !{!17}
!17 = !DISubrange(count: 50)
!18 = !DILocation(line: 4, column: 9, scope: !9)
!19 = !DILocalVariable(name: "marks", scope: !9, file: !1, line: 5, type: !12)
!20 = !DILocation(line: 5, column: 8, scope: !9)
!21 = !DILocalVariable(name: "i", scope: !9, file: !1, line: 5, type: !12)
!22 = !DILocation(line: 5, column: 15, scope: !9)
!23 = !DILocalVariable(name: "num", scope: !9, file: !1, line: 5, type: !12)
!24 = !DILocation(line: 5, column: 18, scope: !9)
!25 = !DILocation(line: 7, column: 4, scope: !9)
!26 = !DILocation(line: 8, column: 4, scope: !9)
!27 = !DILocalVariable(name: "fptr", scope: !9, file: !1, line: 10, type: !28)
!28 = !DIDerivedType(tag: DW_TAG_pointer_type, baseType: !29, size: 64)
!29 = !DIDerivedType(tag: DW_TAG_typedef, name: "FILE", file: !30, line: 7, baseType: !31)
!30 = !DIFile(filename: "/usr/include/x86_64-linux-gnu/bits/types/FILE.h", directory: "")
!31 = distinct !DICompositeType(tag: DW_TAG_structure_type, name: "_IO_FILE", file: !32, line: 49, size: 1728, elements: !33)
!32 = !DIFile(filename: "/usr/include/x86_64-linux-gnu/bits/types/struct_FILE.h", directory: "")
!33 = !{!34, !35, !37, !38, !39, !40, !41, !42, !43, !44, !45, !46, !47, !50, !52, !53, !54, !58, !60, !62, !66, !69, !71, !74, !77, !78, !79, !83, !84}
!34 = !DIDerivedType(tag: DW_TAG_member, name: "_flags", scope: !31, file: !32, line: 51, baseType: !12, size: 32)
!35 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_read_ptr", scope: !31, file: !32, line: 54, baseType: !36, size: 64, offset: 64)
!36 = !DIDerivedType(tag: DW_TAG_pointer_type, baseType: !15, size: 64)
!37 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_read_end", scope: !31, file: !32, line: 55, baseType: !36, size: 64, offset: 128)
!38 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_read_base", scope: !31, file: !32, line: 56, baseType: !36, size: 64, offset: 192)
!39 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_write_base", scope: !31, file: !32, line: 57, baseType: !36, size: 64, offset: 256)
!40 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_write_ptr", scope: !31, file: !32, line: 58, baseType: !36, size: 64, offset: 320)
!41 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_write_end", scope: !31, file: !32, line: 59, baseType: !36, size: 64, offset: 384)
!42 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_buf_base", scope: !31, file: !32, line: 60, baseType: !36, size: 64, offset: 448)
!43 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_buf_end", scope: !31, file: !32, line: 61, baseType: !36, size: 64, offset: 512)
!44 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_save_base", scope: !31, file: !32, line: 64, baseType: !36, size: 64, offset: 576)
!45 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_backup_base", scope: !31, file: !32, line: 65, baseType: !36, size: 64, offset: 640)
!46 = !DIDerivedType(tag: DW_TAG_member, name: "_IO_save_end", scope: !31, file: !32, line: 66, baseType: !36, size: 64, offset: 704)
!47 = !DIDerivedType(tag: DW_TAG_member, name: "_markers", scope: !31, file: !32, line: 68, baseType: !48, size: 64, offset: 768)
!48 = !DIDerivedType(tag: DW_TAG_pointer_type, baseType: !49, size: 64)
!49 = !DICompositeType(tag: DW_TAG_structure_type, name: "_IO_marker", file: !32, line: 36, flags: DIFlagFwdDecl)
!50 = !DIDerivedType(tag: DW_TAG_member, name: "_chain", scope: !31, file: !32, line: 70, baseType: !51, size: 64, offset: 832)
!51 = !DIDerivedType(tag: DW_TAG_pointer_type, baseType: !31, size: 64)
!52 = !DIDerivedType(tag: DW_TAG_member, name: "_fileno", scope: !31, file: !32, line: 72, baseType: !12, size: 32, offset: 896)
!53 = !DIDerivedType(tag: DW_TAG_member, name: "_flags2", scope: !31, file: !32, line: 73, baseType: !12, size: 32, offset: 928)
!54 = !DIDerivedType(tag: DW_TAG_member, name: "_old_offset", scope: !31, file: !32, line: 74, baseType: !55, size: 64, offset: 960)
!55 = !DIDerivedType(tag: DW_TAG_typedef, name: "__off_t", file: !56, line: 152, baseType: !57)
!56 = !DIFile(filename: "/usr/include/x86_64-linux-gnu/bits/types.h", directory: "")
!57 = !DIBasicType(name: "long int", size: 64, encoding: DW_ATE_signed)
!58 = !DIDerivedType(tag: DW_TAG_member, name: "_cur_column", scope: !31, file: !32, line: 77, baseType: !59, size: 16, offset: 1024)
!59 = !DIBasicType(name: "unsigned short", size: 16, encoding: DW_ATE_unsigned)
!60 = !DIDerivedType(tag: DW_TAG_member, name: "_vtable_offset", scope: !31, file: !32, line: 78, baseType: !61, size: 8, offset: 1040)
!61 = !DIBasicType(name: "signed char", size: 8, encoding: DW_ATE_signed_char)
!62 = !DIDerivedType(tag: DW_TAG_member, name: "_shortbuf", scope: !31, file: !32, line: 79, baseType: !63, size: 8, offset: 1048)
!63 = !DICompositeType(tag: DW_TAG_array_type, baseType: !15, size: 8, elements: !64)
!64 = !{!65}
!65 = !DISubrange(count: 1)
!66 = !DIDerivedType(tag: DW_TAG_member, name: "_lock", scope: !31, file: !32, line: 81, baseType: !67, size: 64, offset: 1088)
!67 = !DIDerivedType(tag: DW_TAG_pointer_type, baseType: !68, size: 64)
!68 = !DIDerivedType(tag: DW_TAG_typedef, name: "_IO_lock_t", file: !32, line: 43, baseType: null)
!69 = !DIDerivedType(tag: DW_TAG_member, name: "_offset", scope: !31, file: !32, line: 89, baseType: !70, size: 64, offset: 1152)
!70 = !DIDerivedType(tag: DW_TAG_typedef, name: "__off64_t", file: !56, line: 153, baseType: !57)
!71 = !DIDerivedType(tag: DW_TAG_member, name: "_codecvt", scope: !31, file: !32, line: 91, baseType: !72, size: 64, offset: 1216)
!72 = !DIDerivedType(tag: DW_TAG_pointer_type, baseType: !73, size: 64)
!73 = !DICompositeType(tag: DW_TAG_structure_type, name: "_IO_codecvt", file: !32, line: 37, flags: DIFlagFwdDecl)
!74 = !DIDerivedType(tag: DW_TAG_member, name: "_wide_data", scope: !31, file: !32, line: 92, baseType: !75, size: 64, offset: 1280)
!75 = !DIDerivedType(tag: DW_TAG_pointer_type, baseType: !76, size: 64)
!76 = !DICompositeType(tag: DW_TAG_structure_type, name: "_IO_wide_data", file: !32, line: 38, flags: DIFlagFwdDecl)
!77 = !DIDerivedType(tag: DW_TAG_member, name: "_freeres_list", scope: !31, file: !32, line: 93, baseType: !51, size: 64, offset: 1344)
!78 = !DIDerivedType(tag: DW_TAG_member, name: "_freeres_buf", scope: !31, file: !32, line: 94, baseType: !4, size: 64, offset: 1408)
!79 = !DIDerivedType(tag: DW_TAG_member, name: "__pad5", scope: !31, file: !32, line: 95, baseType: !80, size: 64, offset: 1472)
!80 = !DIDerivedType(tag: DW_TAG_typedef, name: "size_t", file: !81, line: 46, baseType: !82)
!81 = !DIFile(filename: "/usr/lib/llvm-10/lib/clang/10.0.1/include/stddef.h", directory: "")
!82 = !DIBasicType(name: "long unsigned int", size: 64, encoding: DW_ATE_unsigned)
!83 = !DIDerivedType(tag: DW_TAG_member, name: "_mode", scope: !31, file: !32, line: 96, baseType: !12, size: 32, offset: 1536)
!84 = !DIDerivedType(tag: DW_TAG_member, name: "_unused2", scope: !31, file: !32, line: 98, baseType: !85, size: 160, offset: 1568)
!85 = !DICompositeType(tag: DW_TAG_array_type, baseType: !15, size: 160, elements: !86)
!86 = !{!87}
!87 = !DISubrange(count: 20)
!88 = !DILocation(line: 10, column: 10, scope: !9)
!89 = !DILocation(line: 11, column: 12, scope: !9)
!90 = !DILocation(line: 11, column: 9, scope: !9)
!91 = !DILocation(line: 12, column: 7, scope: !92)
!92 = distinct !DILexicalBlock(scope: !9, file: !1, line: 12, column: 7)
!93 = !DILocation(line: 12, column: 12, scope: !92)
!94 = !DILocation(line: 12, column: 7, scope: !9)
!95 = !DILocation(line: 14, column: 8, scope: !96)
!96 = distinct !DILexicalBlock(scope: !92, file: !1, line: 13, column: 4)
!97 = !DILocation(line: 15, column: 8, scope: !96)
!98 = !DILocation(line: 18, column: 10, scope: !99)
!99 = distinct !DILexicalBlock(scope: !9, file: !1, line: 18, column: 4)
!100 = !DILocation(line: 18, column: 8, scope: !99)
!101 = !DILocation(line: 18, column: 15, scope: !102)
!102 = distinct !DILexicalBlock(scope: !99, file: !1, line: 18, column: 4)
!103 = !DILocation(line: 18, column: 19, scope: !102)
!104 = !DILocation(line: 18, column: 17, scope: !102)
!105 = !DILocation(line: 18, column: 4, scope: !99)
!106 = !DILocation(line: 20, column: 45, scope: !107)
!107 = distinct !DILexicalBlock(scope: !102, file: !1, line: 19, column: 4)
!108 = !DILocation(line: 20, column: 46, scope: !107)
!109 = !DILocation(line: 20, column: 7, scope: !107)
!110 = !DILocation(line: 21, column: 19, scope: !107)
!111 = !DILocation(line: 21, column: 7, scope: !107)
!112 = !DILocation(line: 23, column: 7, scope: !107)
!113 = !DILocation(line: 24, column: 7, scope: !107)
!114 = !DILocation(line: 26, column: 15, scope: !107)
!115 = !DILocation(line: 26, column: 48, scope: !107)
!116 = !DILocation(line: 26, column: 54, scope: !107)
!117 = !DILocation(line: 26, column: 7, scope: !107)
!118 = !DILocation(line: 18, column: 24, scope: !102)
!119 = !DILocation(line: 18, column: 4, scope: !102)
!120 = distinct !{!120, !105, !121}
!121 = !DILocation(line: 27, column: 4, scope: !99)
!122 = !DILocation(line: 29, column: 11, scope: !9)
!123 = !DILocation(line: 29, column: 4, scope: !9)
!124 = !DILocation(line: 30, column: 4, scope: !9)
