import logging
import os


def create_shell_envs(version: int):
    llvm_path = f"/usr/lib/llvm-{version}"
    env = os.environ.copy()

    logging.debug(f"LLVM PATH: {llvm_path}")

    env.update(
        {
            "LLVM_BIN_PATH": f"{llvm_path}/bin",
        }
    )
    return env


SCRIPT_CMD_C = """
cd {} && \
$LLVM_BIN_PATH/clang -O0 -g -Xclang -disable-O0-optnone -emit-llvm -S *.c && \
rm *.c && \
$LLVM_BIN_PATH/llvm-link *.ll -S -o beforeg.ll && \
$LLVM_BIN_PATH/opt beforeg.ll -S -passes={} -o afterg.ll && \
llvm-block beforeg.ll afterg.ll 2> output.tsv && \
$LLVM_BIN_PATH/opt -S beforeg.ll -o before.ll -strip-debug && \
$LLVM_BIN_PATH/opt -strip-debug -S afterg.ll -o after.ll && \
mkdir before after && \
$LLVM_BIN_PATH/opt -passes=dot-cfg before.ll && \
mv .*.dot before && \
$LLVM_BIN_PATH/opt -passes=dot-cfg after.ll && \
mv .*.dot after && \
cd before && \
dot -Txdot_json -o before.json .*.dot && \
cd ../after && \
dot -Txdot_json -o after.json .*.dot"""

SCRIPT_CMD_CPP = """
cd {} && \
$LLVM_BIN_PATH/clang++ -O0 -g -Xclang -disable-O0-optnone -emit-llvm -S *.cpp && \
rm *.cpp && \
$LLVM_BIN_PATH/llvm-link *.ll -S -o beforeg.ll && \
$LLVM_BIN_PATH/opt beforeg.ll -S -passes={} -o afterg.ll && \
llvm-block beforeg.ll afterg.ll 2> output.tsv && \
$LLVM_BIN_PATH/opt -S beforeg.ll -o before.ll -strip-debug && \
$LLVM_BIN_PATH/opt -strip-debug -S afterg.ll -o after.ll && \
mkdir before after && \
$LLVM_BIN_PATH/opt -passes=dot-cfg before.ll && \
mv .*.dot before && \
$LLVM_BIN_PATH/opt -passes=dot-cfg after.ll && \
mv .*.dot after && \
cd before && \
dot -Txdot_json -o before.json .*.dot && \
cd ../after && \
dot -Txdot_json -o after.json .*.dot"""  # noqa: E501

SCRIPT_CMD_LL = """
cd {} && \
mv {} beforeg.ll && \
$LLVM_BIN_PATH/opt beforeg.ll -S -passes={} -o afterg.ll && \
llvm-block beforeg.ll afterg.ll 2> output.tsv && \
$LLVM_BIN_PATH/opt -S beforeg.ll -o before.ll -strip-debug && \
$LLVM_BIN_PATH/opt -strip-debug -S afterg.ll -o after.ll && \
mkdir before after && \
$LLVM_BIN_PATH/opt -passes=dot-cfg before.ll && \
mv .*.dot before && \
$LLVM_BIN_PATH/opt -passes=dot-cfg after.ll && \
mv .*.dot after && \
cd before && \
dot -Txdot_json -o before.json .*.dot && \
cd ../after && \
dot -Txdot_json -o after.json .*.dot"""
