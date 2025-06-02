import json
import csv
import glob


def read_file(path):
    with open(path, "r") as file:
        data = file.read()
    return data


def read_beforell(path):
    files = glob.glob(f"{path}/beforeg.ll")
    with open(files[0], "r") as f:
        data = f.read()
    return data


def read_afterll(path):
    files = glob.glob(f"{path}/afterg.ll")
    with open(files[0], "r") as f:
        data = f.read()
    return data


def read_json(path):
    return json.loads(read_file(path))


def before_output(path):
    before_output = []
    with open(path) as f:
        tr = csv.reader(f, delimiter="\t")
        for row in tr:
            if row:
                before_output.append(row[0].split(" ")[0])
    return before_output


def after_output(path):
    after_output = []
    with open(path) as f:
        tr = csv.reader(f, delimiter="\t")
        for row in tr:
            if row:
                after_output.append(row[0].split(" ")[1])
    return after_output
