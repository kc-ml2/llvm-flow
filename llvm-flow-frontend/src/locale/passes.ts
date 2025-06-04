export default {
  analysis: {
    1: {
      pass: 'aa-eval',
      description: 'Exhaustive Alias Analysis Precision Evaluator',
    },
    2: {
      pass: 'basic-aa',
      description: 'Basic Alias Analysis (stateless AA impl)',
    },
    3: {
      pass: 'basiccg',
      description: 'Basic CallGraph Construction',
    },
    4: {
      pass: 'count-aa',
      description: 'Count Alias Analysis Query Responses',
    },
    5: {
      pass: 'da',
      description: 'Dependence Analysis',
    },
    6: {
      pass: 'debug-aa',
      description: 'AA use debugger',
    },
    7: {
      pass: 'domfrontier',
      description: 'Dominance Frontier Construction',
    },
    8: {
      pass: 'domtree',
      description: 'Dominator Tree Construction',
    },
    9: {
      pass: 'globalsmodref-aa',
      description: 'Simple mod/ref analysis for globals',
    },
    10: {
      pass: 'instcount',
      description: 'Counts the various types of Instructions',
    },
    11: {
      pass: 'intervals',
      description: 'Interval Partition Construction',
    },
    12: {
      pass: 'iv-users',
      description: '[Deprecated] Induction Variable Users',
    },
    13: {
      pass: 'lazy-value-info',
      description: 'Lazy Value Information Analysis',
    },
    14: {
      pass: 'libcall-aa',
      description: 'LibCall Alias Analysis',
    },
    15: {
      pass: 'lint',
      description: 'Statically lint-checks LLVM IR',
    },
    16: {
      pass: 'loops',
      description: 'Natural Loop Information',
    },
    17: {
      pass: 'memdep',
      description: 'Memory Dependence Analysis',
    },
    18: {
      pass: 'module-debuginfo',
      description: 'Decodes module-level debug info',
    },
    19: {
      pass: 'postdomfrontier',
      description: 'Post-Dominance Frontier Construction',
    },
    20: {
      pass: 'postdomtree',
      description: 'Post-Dominator Tree Construction',
    },
    21: {
      pass: 'regions',
      description: 'Detect single entry single exit regions',
    },
    22: {
      pass: 'scalar-evolution',
      description: 'Scalar Evolution Analysis',
    },
    23: {
      pass: 'scev-aa',
      description: 'ScalarEvolution-based Alias Analysis',
    },
    24: {
      pass: 'stack-safety',
      description: 'Stack Safety Analysis',
    },
    25: {
      pass: 'targetdata',
      description: 'Target Data Layout',
    },
  },
  transform: {
    1: {
      pass: 'adce',
      description: 'Aggressive Dead Code Elimination',
    },
    2: {
      pass: 'always-inline',
      description: 'Inliner for always_inline functions',
    },
    3: {
      pass: 'argpromotion',
      description: 'Promote ‘by reference’ arguments to scalars',
    },
    4: {
      pass: 'bb-vectorize',
      description: 'Basic-Block Vectorization',
    },
    5: {
      pass: 'block-placement',
      description: 'Profile Guided Basic Block Placement',
    },
    6: {
      pass: 'break-crit-edges',
      description: 'Break critical edges in CFG',
    },
    7: {
      pass: 'codegenprepare',
      description: 'Optimize for code generation',
    },
    8: {
      pass: 'constmerge',
      description: 'Merge Duplicate Global Constants',
    },
    9: {
      pass: 'dce',
      description: 'Dead Code Elimination',
    },
    10: {
      pass: 'deadargelim',
      description: 'Dead Argument Elimination',
    },
    11: {
      pass: 'deadtypeelim',
      description: 'Dead Type Elimination',
    },
    12: {
      pass: 'die',
      description: 'Dead Instruction Elimination',
    },
    13: {
      pass: 'dse',
      description: 'Dead Store Elimination',
    },
    14: {
      pass: 'function-attrs',
      description: 'Deduce function attributes',
    },
    15: {
      pass: 'globaldce',
      description: 'Dead Global Elimination',
    },
    16: {
      pass: 'globalopt',
      description: 'Global Variable Optimizer',
    },
    17: {
      pass: 'gvn',
      description: 'Global Value Numbering',
    },
    18: {
      pass: 'indvars',
      description: 'Canonicalize Induction Variables',
    },
    19: {
      pass: 'inline',
      description: 'Function Integration/Inlining',
    },
    20: {
      pass: 'instcombine',
      description: 'Combine redundant instructions',
    },
    21: {
      pass: 'aggressive-instcombine',
      description: 'Combine expression patterns',
    },
    22: {
      pass: 'internalize',
      description: 'Internalize Global Symbols',
    },
    23: {
      pass: 'ipsccp',
      description: 'Interprocedural Sparse Conditional Constant Propagation',
    },
    24: {
      pass: 'jump-threading',
      description: 'Jump Threading',
    },
    25: {
      pass: 'lcssa',
      description: 'Loop-Closed SSA Form Pass',
    },
    26: {
      pass: 'licm',
      description: 'Loop Invariant Code Motion',
    },
    27: {
      pass: 'loop-deletion',
      description: 'Delete dead loops',
    },
    28: {
      pass: 'loop-extract',
      description: 'Extract loops into new functions',
    },
    29: {
      pass: 'loop-extract-single',
      description: 'Extract at most one loop into a new function',
    },
    30: {
      pass: 'loop-reduce',
      description: 'Loop Strength Reduction',
    },
    31: {
      pass: 'loop-rotate',
      description: 'Rotate Loops',
    },
    32: {
      pass: 'loop-simplify',
      description: 'Canonicalize natural loops',
    },
    33: {
      pass: 'loop-unroll',
      description: 'Unroll loops',
    },
    34: {
      pass: 'loop-unroll-and-jam',
      description: 'Unroll and Jam loops',
    },
    35: {
      pass: 'loop-unswitch',
      description: 'Unswitch loops',
    },
    36: {
      pass: 'lower-global-dtors',
      description: 'Lower global destructors',
    },
    37: {
      pass: 'loweratomic',
      description: 'Lower atomic intrinsics to non-atomic form',
    },
    38: {
      pass: 'lowerinvoke',
      description: 'Lower invokes to calls, for unwindless code generators',
    },
    39: {
      pass: 'lowerswitch',
      description: 'Lower SwitchInsts to branches',
    },
    40: {
      pass: 'mem2reg',
      description: 'Promote Memory to Register',
    },
    41: {
      pass: 'memcpyopt',
      description: 'MemCpy Optimization',
    },
    42: {
      pass: 'mergefunc',
      description: 'Merge Functions',
    },
    43: {
      pass: 'mergereturn',
      description: 'Unify function exit nodes',
    },
    44: {
      pass: 'partial-inliner',
      description: 'Partial Inliner',
    },
    45: {
      pass: 'prune-eh',
      description: 'Remove unused exception handling info',
    },
    46: {
      pass: 'reassociate',
      description: 'Reassociate expressions',
    },
    47: {
      pass: 'rel-lookup-table-converter',
      description: 'Relative lookup table converter',
    },
    48: {
      pass: 'reg2mem',
      description: 'Demote all values to stack slots',
    },
    49: {
      pass: 'sroa',
      description: 'Scalar Replacement of Aggregates',
    },
    50: {
      pass: 'sccp',
      description: 'Sparse Conditional Constant Propagation',
    },
    51: {
      pass: 'simplifycfg',
      description: 'Simplify the CFG',
    },
    52: {
      pass: 'sink',
      description: 'Code sinking',
    },
    53: {
      pass: 'strip',
      description: 'Strip all symbols from a module',
    },
    54: {
      pass: 'strip-dead-debug-info',
      description: 'Strip debug info for unused symbols',
    },
    55: {
      pass: 'strip-dead-prototypes',
      description: 'Strip Unused Function Prototypes',
    },
    56: {
      pass: 'strip-debug-declare',
      description: 'Strip all llvm.dbg.declare intrinsics',
    },
    57: {
      pass: 'strip-nondebug',
      description: 'Strip all symbols, except dbg symbols, from a module',
    },
    58: {
      pass: 'tailcallelim',
      description: 'Tail Call Elimination',
    },
  },
}
