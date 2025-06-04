// const position = { x: 0, y: 0 }
const edgeType = 'smoothstep'

export const initialNodes = [
  {
    id: '0',
    name: 'Node0x7f9495d1d8b0',
    data: {
      name: '{%0:\\l  %1 = alloca i32, align 4\\l  %2 = alloca i32, align 4\\l  %3 = alloca i32, align 4\\l  store i32 0, i32* %1, align 4\\l  store i32 0, i32* %2, align 4\\l  br label %4\\l}',
      label: 'zero', // //"{%0:\\l  %1 = alloca i32, align 4\\l  %2 = alloca i32, align 4\\l  %3 = alloca i32, align 4\\l  store i32 0, i32* %1, align 4\\l  store i32 0, i32* %2, align 4\\l  br label %4\\l}",
    },
    type: 'selectorNode',
    // position,
  },
  {
    id: '1',
    name: 'Node0x7f9495d1e3f0',
    data: {
      name: 'test2',
      label: 'one', // "{%4:\\l4:                                                \\l  %5 = call i32 @getchar()\\l  store i32 %5, i32* @c, align 4\\l  %6 = icmp ne i32 %5, -1\\l  %7 = load i32, i32* %2, align 4\\l  br i1 %6, label %8, label %216\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '2',
    name: 'Node0x7f9495d1e7a0',
    data: {
      name: '2',
      label: 'two', // "{%8:\\l8:                                                \\l  switch i32 %7, label %215 [\\l    i32 0, label %9\\l    i32 1, label %39\\l    i32 2, label %60\\l    i32 3, label %84\\l    i32 4, label %108\\l    i32 5, label %136\\l    i32 6, label %166\\l    i32 7, label %180\\l    i32 8, label %195\\l  ]\\l|{<s0>def|<s1>0|<s2>1|<s3>2|<s4>3|<s5>4|<s6>5|<s7>6|<s8>7|<s9>8}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '3',
    name: 'Node0x7f9495d1e820',
    data: {
      label: 'three', // "{%216:\\l216:                                              \\l  %217 = icmp eq i32 %7, 6\\l  %218 = load i32, i32* %2, align 4\\l  %219 = icmp eq i32 %218, 8\\l  %or.cond = or i1 %217, %219\\l  %220 = load i32, i32* %2, align 4\\l  %221 = icmp eq i32 %220, 7\\l  %or.cond3 = or i1 %or.cond, %221\\l  %222 = load i32, i32* @nL, align 4\\l  br i1 %or.cond3, label %223, label %229\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '4',
    name: 'Node0x7f9495d1e430',
    data: {
      label: 'four', // "{%215:\\l215:                                              \\l  br label %4\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '5',
    name: 'Node0x7f9495d1e9a0',
    data: {
      label: 'one', // "{%9:\\l9:                                                \\l  %10 = load i32, i32* @c, align 4\\l  %11 = icmp eq i32 %10, 10\\l  br i1 %11, label %12, label %17\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '6',
    name: 'Node0x7f9495d1ea20',
    data: {
      label: 'one', // "{%39:\\l39:                                               \\l  %40 = load i32, i32* @c, align 4\\l  %41 = icmp eq i32 %40, 10\\l  br i1 %41, label %42, label %47\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '7',
    name: 'Node0x7f9495d1ead0',
    data: {
      label: 'one', // "{%60:\\l60:                                               \\l  store i32 0, i32* @nLerror, align 4\\l  %61 = load i32, i32* @c, align 4\\l  %62 = icmp eq i32 %61, 10\\l  br i1 %62, label %63, label %68\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '8',
    name: 'Node0x7f9495d1eb80',
    data: {
      label: 'one', // "{%84:\\l84:                                               \\l  %85 = load i32, i32* @c, align 4\\l  %86 = icmp eq i32 %85, 10\\l  br i1 %86, label %87, label %92\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '9',
    name: 'Node0x7f9495d1ec30',
    data: {
      label: 'one', // "{%108:\\l108:                                              \\l  %109 = load i32, i32* @c, align 4\\l  %110 = icmp eq i32 %109, 47\\l  br i1 %110, label %111, label %114\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '10',
    name: 'Node0x7f9495d1ece0',
    data: {
      label: 'one', // "{%136:\\l136:                                              \\l  %137 = load i32, i32* @c, align 4\\l  %138 = icmp eq i32 %137, 47\\l  br i1 %138, label %139, label %142\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '11',
    name: 'Node0x7f9495d1ed90',
    data: {
      label: 'one', // "{%166:\\l166:                                              \\l  %167 = load i32, i32* @c, align 4\\l  %168 = icmp eq i32 %167, 42\\l  br i1 %168, label %169, label %170\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '12',
    name: 'Node0x7f9495d1ee40',
    data: {
      label: 'one', // "{%180:\\l180:                                              \\l  %181 = load i32, i32* @c, align 4\\l  %182 = icmp eq i32 %181, 10\\l  br i1 %182, label %183, label %190\\l|{<s0>T|<s1>F}}",
    },
    type: 'selectorNode',
    // position,
  },
  {
    id: '13',
    name: 'Node0x7f9495d1eef0',
    data: {
      label: 'one', // "{%195:\\l195:                                              \\l  %196 = load i32, i32* @c, align 4\\l  %197 = icmp eq i32 %196, 47\\l  br i1 %197, label %198, label %201\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '14',
    name: 'Node0x7f9495d1e9e0',
    data: {
      label: 'one', // "{%12:\\l12:                                               \\l  %13 = load i32, i32* @nC, align 4\\l  %14 = add nsw i32 %13, 1\\l  store i32 %14, i32* @nC, align 4\\l  %15 = load i32, i32* @nL, align 4\\l  %16 = add nsw i32 %15, 2\\l  store i32 %16, i32* @nL, align 4\\l  store i32 3, i32* %2, align 4\\l  br label %215\\l}",
    },
    type: 'selectorNode',
    // position,
  },
  {
    id: '15',
    name: 'Node0x7f9495d1f2f0',
    data: {
      label: 'one', // "{%17:\\l17:                                               \\l  %18 = load i32, i32* @c, align 4\\l  %19 = call i32 @isspace(i32 %18) #4\\l  %20 = icmp ne i32 %19, 0\\l  br i1 %20, label %21, label %26\\l|{<s0>T|<s1>F}}",
    },
    type: 'selectorNode', // position,
  },
  {
    id: '16',
    name: 'Node0x7f9495d1fa30',
    data: {
      label: 'one', // "{%21:\\l21:                                               \\l  %22 = load i32, i32* @nC, align 4\\l  %23 = add nsw i32 %22, 1\\l  store i32 %23, i32* @nC, align 4\\l  %24 = load i32, i32* @nL, align 4\\l  %25 = add nsw i32 %24, 1\\l  store i32 %25, i32* @nL, align 4\\l  store i32 2, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '17',
    name: 'Node0x7f9495d1fab0',
    data: {
      label: 'one', // "{%26:\\l26:                                               \\l  %27 = load i32, i32* @c, align 4\\l  %28 = icmp eq i32 %27, 47\\l  %29 = load i32, i32* @nC, align 4\\l  %30 = add nsw i32 %29, 1\\l  store i32 %30, i32* @nC, align 4\\l  br i1 %28, label %31, label %34\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '18',
    name: 'Node0x7f9495d1faf0',
    data: {
      label: 'one', // "{%31:\\l31:                                               \\l  %32 = load i32, i32* @nL, align 4\\l  %33 = add nsw i32 %32, 1\\l  store i32 %33, i32* @nL, align 4\\l  store i32 4, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '19',
    name: 'Node0x7f9495d20140',
    data: {
      label: 'one', // "{%34:\\l34:                                               \\l  %35 = load i32, i32* @nW, align 4\\l  %36 = add nsw i32 %35, 1\\l  store i32 %36, i32* @nW, align 4\\l  %37 = load i32, i32* @nL, align 4\\l  %38 = add nsw i32 %37, 1\\l  store i32 %38, i32* @nL, align 4\\l  store i32 1, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '20',
    name: 'Node0x7f9495d1ea60',
    data: {
      label: 'one', // "{%42:\\l42:                                               \\l  %43 = load i32, i32* @nC, align 4\\l  %44 = add nsw i32 %43, 1\\l  store i32 %44, i32* @nC, align 4\\l  %45 = load i32, i32* @nL, align 4\\l  %46 = add nsw i32 %45, 1\\l  store i32 %46, i32* @nL, align 4\\l  store i32 3, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '21',
    name: 'Node0x7f9495d20100',
    data: {
      label: 'one', // "{%47:\\l47:                                               \\l  %48 = load i32, i32* @c, align 4\\l  %49 = call i32 @isspace(i32 %48) #4\\l  %50 = icmp ne i32 %49, 0\\l  br i1 %50, label %51, label %54\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '22',
    name: 'Node0x7f9495d20180',
    data: {
      label: 'one', // "{%51:\\l51:                                               \\l  %52 = load i32, i32* @nC, align 4\\l  %53 = add nsw i32 %52, 1\\l  store i32 %53, i32* @nC, align 4\\l  store i32 2, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '23',
    name: 'Node0x7f9495d20f00',
    data: {
      label: 'one', // "{%54:\\l54:                                               \\l  %55 = load i32, i32* @c, align 4\\l  %56 = icmp eq i32 %55, 47\\l  %57 = load i32, i32* @nC, align 4\\l  %58 = add nsw i32 %57, 1\\l  store i32 %58, i32* @nC, align 4\\l  br i1 %56, label %59, label %215\\l|{<s0>T|<s1>F}}",
    },
    type: 'selectorNode',
  },
  {
    id: '24',
    name: 'Node0x7f9495d20f40',
    data: {
      label: 'one', // "{%59:\\l59:                                               \\l  store i32 4, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '25',
    name: 'Node0x7f9495d1eb10',
    data: {
      label: 'one', // "{%63:\\l63:                                               \\l  %64 = load i32, i32* @nC, align 4\\l  %65 = add nsw i32 %64, 1\\l  store i32 %65, i32* @nC, align 4\\l  %66 = load i32, i32* @nL, align 4\\l  %67 = add nsw i32 %66, 1\\l  store i32 %67, i32* @nL, align 4\\l  store i32 3, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '26',
    name: 'Node0x7f9495d21690',
    data: {
      label: 'one', // "{%68:\\l68:                                               \\l  %69 = load i32, i32* @c, align 4\\l  %70 = call i32 @isspace(i32 %69) #4\\l  %71 = icmp ne i32 %70, 0\\l  br i1 %71, label %72, label %75\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '27',
    name: 'Node0x7f9495d20ec0',
    data: {
      label: 'one', // "{%72:\\l72:                                               \\l  %73 = load i32, i32* @nC, align 4\\l  %74 = add nsw i32 %73, 1\\l  store i32 %74, i32* @nC, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '28',
    name: 'Node0x7f9495d21a60',
    data: {
      label: 'one', // "{%75:\\l75:                                               \\l  %76 = load i32, i32* @c, align 4\\l  %77 = icmp eq i32 %76, 47\\l  %78 = load i32, i32* @nC, align 4\\l  %79 = add nsw i32 %78, 1\\l  store i32 %79, i32* @nC, align 4\\l  %80 = load i32, i32* @nW, align 4\\l  %81 = add nsw i32 %80, 1\\l  store i32 %81, i32* @nW, align 4\\l  br i1 %77, label %82, label %83\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '29',
    name: 'Node0x7f9495d21aa0',
    data: {
      label: 'one', // "{%82:\\l82:                                               \\l  store i32 5, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '30',
    name: 'Node0x7f9495d22040',
    data: {
      label: 'one', // "{%83:\\l83:                                               \\l  store i32 1, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '31',
    name: 'Node0x7f9495d1ebc0',
    data: {
      label: 'one', // "{%87:\\l87:                                               \\l  %88 = load i32, i32* @nC, align 4\\l  %89 = add nsw i32 %88, 1\\l  store i32 %89, i32* @nC, align 4\\l  %90 = load i32, i32* @nL, align 4\\l  %91 = add nsw i32 %90, 1\\l  store i32 %91, i32* @nL, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '32',
    name: 'Node0x7f9495d21a20',
    data: {
      label: 'one', // "{%92:\\l92:                                               \\l  %93 = load i32, i32* @c, align 4\\l  %94 = call i32 @isspace(i32 %93) #4\\l  %95 = icmp ne i32 %94, 0\\l  br i1 %95, label %96, label %99\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '33',
    name: 'Node0x7f9495d22080',
    data: {
      label: 'one', // "{%96:\\l96:                                               \\l  %97 = load i32, i32* @nC, align 4\\l  %98 = add nsw i32 %97, 1\\l  store i32 %98, i32* @nC, align 4\\l  store i32 2, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '34',
    name: 'Node0x7f9495d228b0',
    data: {
      label: 'one', // "{%99:\\l99:                                               \\l  %100 = load i32, i32* @c, align 4\\l  %101 = icmp eq i32 %100, 47\\l  %102 = load i32, i32* @nC, align 4\\l  %103 = add nsw i32 %102, 1\\l  store i32 %103, i32* @nC, align 4\\l  %104 = load i32, i32* @nW, align 4\\l  %105 = add nsw i32 %104, 1\\l  store i32 %105, i32* @nW, align 4\\l  br i1 %101, label %106, label %107\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '35',
    name: 'Node0x7f9495d228f0',
    data: {
      label: 'one', // "{%106:\\l106:                                              \\l  store i32 5, i32* %2, align 4\\l  br label %215\\l}",
    },
    type: 'selectorNode',
    // position,
  },
  {
    id: '36',
    name: 'Node0x7f9495d22f00',
    data: {
      label: 'one', // "{%107:\\l107:                                              \\l  store i32 1, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '37',
    name: 'Node0x7f9495d1ec70',
    data: {
      label: 'one', // "{%111:\\l111:                                              \\l  %112 = load i32, i32* @nC, align 4\\l  %113 = add nsw i32 %112, 1\\l  store i32 %113, i32* @nC, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '38',
    name: 'Node0x7f9495d22870',
    data: {
      label: 'one', // "{%114:\\l114:                                              \\l  %115 = load i32, i32* @c, align 4\\l  %116 = icmp eq i32 %115, 42\\l  br i1 %116, label %117, label %120\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '39',
    name: 'Node0x7f9495d23250',
    data: {
      label: 'one', // "{%117:\\l117:                                              \\l  %118 = load i32, i32* @nC, align 4\\l  %119 = add nsw i32 %118, -1\\l  store i32 %119, i32* @nC, align 4\\l  store i32 6, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '40',
    name: 'Node0x7f9495d235b0',
    data: {
      label: 'one', // "{%120:\\l120:                                              \\l  %121 = load i32, i32* @c, align 4\\l  %122 = icmp eq i32 %121, 10\\l  br i1 %122, label %123, label %128\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '41',
    name: 'Node0x7f9495d235f0',
    data: {
      label: 'one', // "{%123:\\l123:                                              \\l  %124 = load i32, i32* @nC, align 4\\l  %125 = add nsw i32 %124, 1\\l  store i32 %125, i32* @nC, align 4\\l  %126 = load i32, i32* @nL, align 4\\l  %127 = add nsw i32 %126, 1\\l  store i32 %127, i32* @nL, align 4\\l  store i32 3, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '42',
    name: 'Node0x7f9495d23980',
    data: {
      label: 'one', // "{%128:\\l128:                                              \\l  %129 = load i32, i32* @c, align 4\\l  %130 = call i32 @isspace(i32 %129) #4\\l  %131 = icmp ne i32 %130, 0\\l  %132 = load i32, i32* @nC, align 4\\l  %133 = add nsw i32 %132, 1\\l  store i32 %133, i32* @nC, align 4\\l  br i1 %131, label %134, label %135\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '43',
    name: 'Node0x7f9495d23570',
    data: {
      label: 'one', // "{%134:\\l134:                                              \\l  store i32 2, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '44',
    name: 'Node0x7f9495d24090',
    data: {
      label: 'one', // "{%135:\\l135:                                              \\l  store i32 1, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '45',
    name: 'Node0x7f9495d1ed20',
    data: {
      label: 'one', // "{%139:\\l139:                                              \\l  %140 = load i32, i32* @nC, align 4\\l  %141 = add nsw i32 %140, 1\\l  store i32 %141, i32* @nC, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '46',
    name: 'Node0x7f9495d24050',
    data: {
      label: 'one', // "{%142:\\l142:                                              \\l  %143 = load i32, i32* @c, align 4\\l  %144 = icmp eq i32 %143, 42\\l  br i1 %144, label %145, label %150\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '47',
    name: 'Node0x7f9495d243e0',
    data: {
      label: 'one', // "{%145:\\l145:                                              \\l  %146 = load i32, i32* @nC, align 4\\l  %147 = add nsw i32 %146, -1\\l  store i32 %147, i32* @nC, align 4\\l  %148 = load i32, i32* @nW, align 4\\l  %149 = add nsw i32 %148, -1\\l  store i32 %149, i32* @nW, align 4\\l  store i32 6, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '48',
    name: 'Node0x7f9495d24700',
    data: {
      label: 'one', // "{%150:\\l150:                                              \\l  %151 = load i32, i32* @c, align 4\\l  %152 = icmp eq i32 %151, 10\\l  br i1 %152, label %153, label %158\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '49',
    name: 'Node0x7f9495d24740',
    data: {
      label: 'one', // "{%153:\\l153:                                              \\l  %154 = load i32, i32* @nC, align 4\\l  %155 = add nsw i32 %154, 1\\l  store i32 %155, i32* @nC, align 4\\l  %156 = load i32, i32* @nL, align 4\\l  %157 = add nsw i32 %156, 1\\l  store i32 %157, i32* @nL, align 4\\l  store i32 3, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: ' 50',
    name: 'Node0x7f9495d24c10',
    data: {
      label: 'one', // "{%158:\\l158:                                              \\l  %159 = load i32, i32* @c, align 4\\l  %160 = call i32 @isspace(i32 %159) #4\\l  %161 = icmp ne i32 %160, 0\\l  %162 = load i32, i32* @nC, align 4\\l  %163 = add nsw i32 %162, 1\\l  store i32 %163, i32* @nC, align 4\\l  br i1 %161, label %164, label %165\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '51',
    name: 'Node0x7f9495d240d0',
    data: {
      label: 'one', // "{%164:\\l164:                                              \\l  store i32 2, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '52',
    name: 'Node0x7f9495d25320',
    data: {
      label: 'one', // "{%165:\\l165:                                              \\l  store i32 1, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '53',
    name: 'Node0x7f9495d1edd0',
    data: {
      label: 'one', // "{%169:\\l169:                                              \\l  store i32 8, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '54',
    name: 'Node0x7f9495d252e0',
    data: {
      label: 'one', // "{%170:\\l170:                                              \\l  %171 = load i32, i32* @c, align 4\\l  %172 = icmp eq i32 %171, 10\\l  br i1 %172, label %173, label %215\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '55',
    name: 'Node0x7f9495d25670',
    data: {
      label: 'one', // "{%173:\\l173:                                              \\l  %174 = load i32, i32* @nC, align 4\\l  %175 = add nsw i32 %174, 1\\l  store i32 %175, i32* @nC, align 4\\l  %176 = load i32, i32* @nL, align 4\\l  %177 = add nsw i32 %176, 1\\l  store i32 %177, i32* @nL, align 4\\l  %178 = load i32, i32* @nLerror, align 4\\l  %179 = add nsw i32 %178, 1\\l  store i32 %179, i32* @nLerror, align 4\\l  store i32 7, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '56',
    name: 'Node0x7f9495d1ee80',
    data: {
      label: 'one', // "{%183:\\l183:                                              \\l  %184 = load i32, i32* @nC, align 4\\l  %185 = add nsw i32 %184, 1\\l  store i32 %185, i32* @nC, align 4\\l  %186 = load i32, i32* @nL, align 4\\l  %187 = add nsw i32 %186, 1\\l  store i32 %187, i32* @nL, align 4\\l  %188 = load i32, i32* @nLerror, align 4\\l  %189 = add nsw i32 %188, 1\\l  store i32 %189, i32* @nLerror, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '57',
    name: 'Node0x7f9495d25e90',
    data: {
      label: 'one', // //"{%190:\\l190:                                              \\l  %191 = load i32, i32* @c, align 4\\l  %192 = icmp eq i32 %191, 42\\l  br i1 %192, label %193, label %194\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: ' 58',
    name: 'Node0x7f9495d25ed0',
    data: {
      label: 'one', /// / "{%193:\\l193:                                              \\l  store i32 8, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '59',
    name: 'Node0x7f9495d26470',
    data: {
      label: 'one', // //"{%194:\\l194:                                              \\l  store i32 6, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '60',
    name: 'Node0x7f9495d1ef30',
    data: {
      label: 'one', // //"{%198:\\l198:                                              \\l  %199 = load i32, i32* @nC, align 4\\l  %200 = add nsw i32 %199, 1\\l  store i32 %200, i32* @nC, align 4\\l  store i32 2, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '61',
    name: 'Node0x7f9495d25360',
    data: {
      label: 'one', // //"{%201:\\l201:                                              \\l  %202 = load i32, i32* @c, align 4\\l  %203 = icmp eq i32 %202, 10\\l  br i1 %203, label %204, label %211\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '62',
    name: 'Node0x7f9495d267c0',
    data: {
      label: 'one', // //"{%204:\\l204:                                              \\l  %205 = load i32, i32* @nC, align 4\\l  %206 = add nsw i32 %205, 1\\l  store i32 %206, i32* @nC, align 4\\l  %207 = load i32, i32* @nL, align 4\\l  %208 = add nsw i32 %207, 1\\l  store i32 %208, i32* @nL, align 4\\l  %209 = load i32, i32* @nLerror, align 4\\l  %210 = add nsw i32 %209, 1\\l  store i32 %210, i32* @nLerror, align 4\\l  store i32 7, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '63',
    name: 'Node0x7f9495d26b50',
    data: {
      label: 'one', // //"{%211:\\l211:                                              \\l  %212 = load i32, i32* @c, align 4\\l  %213 = icmp ne i32 %212, 42\\l  br i1 %213, label %214, label %215\\l|{<s0>T|<s1>F}}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '64',
    name: 'Node0x7f9495d26b90',
    data: {
      label: 'one', // "{%214:\\l214:                                              \\l  store i32 6, i32* %2, align 4\\l  br label %215\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '65',
    name: 'Node0x7f9495d1e860',
    data: {
      label: 'one', // "{%223:\\l223:                                              \\l  %224 = load i32, i32* @nLerror, align 4\\l  %225 = sub nsw i32 %222, %224\\l  store i32 %225, i32* %3, align 4\\l  %226 = load %struct.__sFILE*, %struct.__sFILE** @__stderrp, align 8\\l  %227 = load i32, i32* %3, align 4\\l  %228 = call i32 (%struct.__sFILE*, i8*, ...) @fprintf(%struct.__sFILE* %226,\\l... i8* getelementptr inbounds ([38 x i8], [38 x i8]* @.str, i64 0, i64 0), i32\\l... %227)\\l  store i32 1, i32* %1, align 4\\l  br label %233\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '66',
    name: 'Node0x7f9495d27750',
    data: {
      label: 'one', // "{%229:\\l229:                                              \\l  %230 = load i32, i32* @nW, align 4\\l  %231 = load i32, i32* @nC, align 4\\l  %232 = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([10 x i8],\\l... [10 x i8]* @.str.1, i64 0, i64 0), i32 %222, i32 %230, i32 %231)\\l  store i32 0, i32* %1, align 4\\l  br label %233\\l}",
    },

    type: 'selectorNode',
    // position,
  },
  {
    id: '67',
    name: 'Node0x7f9495d27f20',
    data: {
      label: 'one', // "{%233:\\l233:                                              \\l  %234 = load i32, i32* %1, align 4\\l  ret i32 %234\\l}",
    },

    type: 'selectorNode',
    // position,
  },
]

export const initialEdges = [
  {
    id: 0,
    source: '0',
    target: '1',
    type: 'edge',
  },
  {
    id: 1,
    source: '1',
    target: '2',
    label: 's0',
    type: edgeType,
  },
  {
    id: 2,
    source: '1',
    target: '3',
    label: 's1',
    type: edgeType,
  },
  {
    id: 3,
    source: '2',
    target: '4',
    label: 's0',
    type: edgeType,
  },
  {
    id: 4,
    source: '2',
    target: '5',
    label: 's1',
    type: edgeType,
  },
  {
    id: 5,
    source: '2',
    target: '6',
    label: 's2',
    type: edgeType,
  },
  {
    id: 6,
    source: '2',
    target: '7',
    label: 's3',
    type: edgeType,
  },
  {
    id: 7,
    source: '2',
    target: '8',
    label: 's4',
    type: edgeType,
  },
  {
    id: 8,
    source: '2',
    target: '9',
    label: 's5',
    type: edgeType,
  },
  {
    id: 9,
    source: '2',
    target: '10',
    label: 's6',
    type: edgeType,
  },
  {
    id: 10,
    source: '2',
    target: '11',
    label: 's7',
    type: edgeType,
  },
  {
    id: 11,
    source: '2',
    target: '12',
    label: 's8',
    type: edgeType,
  },
  {
    id: 12,
    source: '2',
    target: '13',
    label: 's9',
    type: edgeType,
  },
  {
    id: 13,
    source: '3',
    target: '65',
    label: 's0',
    type: edgeType,
  },
  {
    id: 14,
    source: '3',
    target: '66',
    label: 's1',
    type: edgeType,
  },
  {
    id: 15,
    source: '4',
    target: '1',
    type: edgeType,
  },
  {
    id: 16,
    source: '5',
    target: '14',
    label: 's0',
    type: edgeType,
  },
  {
    id: 17,
    source: '5',
    target: '15',
    label: 's1',
    type: edgeType,
  },
  {
    id: 18,
    source: '6',
    target: '20',
    label: 's0',
    type: edgeType,
  },
  {
    id: 19,
    source: '6',
    target: '21',
    label: 's1',
    type: edgeType,
  },
  {
    id: 20,
    source: '7',
    target: '25',
    label: 's0',
    type: edgeType,
  },
  {
    id: 21,
    source: '7',
    target: '26',
    label: 's1',
    type: edgeType,
  },
  {
    id: 22,
    source: '8',
    target: '31',
    label: 's0',
    type: edgeType,
  },
  {
    id: 23,
    source: '8',
    target: '32',
    label: 's1',
    type: edgeType,
  },
  {
    id: 24,
    source: '9',
    target: '37',
    label: 's0',
    type: edgeType,
  },
  {
    id: 25,
    source: '9',
    target: '38',
    label: 's1',
    type: edgeType,
  },
  {
    id: 26,
    source: '10',
    target: '45',
    label: 's0',
    type: edgeType,
  },
  {
    id: 27,
    source: '10',
    target: '46',
    label: 's1',
    type: edgeType,
  },
  {
    id: 28,
    source: '11',
    target: '53',
    label: 's0',
    type: edgeType,
  },
  {
    id: 29,
    source: '11',
    target: '54',
    label: 's1',
    type: edgeType,
  },
  {
    id: 30,
    source: '12',
    target: '56',
    label: 's0',
    type: edgeType,
  },
  {
    id: 31,
    source: '12',
    target: '57',
    label: 's1',
    type: edgeType,
  },
  {
    id: 32,
    source: '13',
    target: '60',
    label: 's0',
    type: edgeType,
  },
  {
    id: 33,
    source: '13',
    target: '61',
    label: 's1',
    type: edgeType,
  },
  {
    id: 34,
    source: '14',
    target: '4',
    type: edgeType,
  },
  {
    id: 35,
    source: '15',
    target: '16',
    label: 's0',
    type: edgeType,
  },
  {
    id: 36,
    source: '15',
    target: '17',
    label: 's1',
    type: edgeType,
  },
  {
    id: 37,
    source: '16',
    target: '4',
    type: edgeType,
  },
  {
    id: 38,
    source: '17',
    target: '18',
    label: 's0',
    type: edgeType,
  },
  {
    id: 39,
    source: '17',
    target: '19',
    label: 's1',
    type: edgeType,
  },
  {
    id: 40,
    source: '18',
    target: '4',
    type: edgeType,
  },
  {
    id: 41,
    source: '19',
    target: '4',
    type: edgeType,
  },
  {
    id: 42,
    source: '20',
    target: '4',
    type: edgeType,
  },
  {
    id: 43,
    source: '21',
    target: '22',
    label: 's0',
    type: edgeType,
  },
  {
    id: 44,
    source: '21',
    target: '23',
    label: 's1',
    type: edgeType,
  },
  {
    id: 45,
    source: '22',
    target: '4',
    type: edgeType,
  },
  {
    id: 46,
    source: '23',
    target: '4',
    label: 's1',
    type: edgeType,
  },
  {
    id: 47,
    source: '23',
    target: '24',
    label: 's0',
    type: edgeType,
  },
  {
    id: 48,
    source: '24',
    target: '4',
    type: edgeType,
  },
  {
    id: 49,
    source: '25',
    target: '4',
    type: edgeType,
  },
  {
    id: 50,
    source: '26',
    target: '27',
    label: 's0',
    type: edgeType,
  },
  {
    id: 51,
    source: '26',
    target: '28',
    label: 's1',
    type: edgeType,
  },
  {
    id: 52,
    source: '27',
    target: '4',
    type: edgeType,
  },
  {
    id: 53,
    source: '28',
    target: '29',
    label: 's0',
    type: edgeType,
  },
  {
    id: 54,
    source: '28',
    target: '30',
    label: 's1',
    type: edgeType,
  },
  {
    id: 55,
    source: '29',
    target: '4',
    type: edgeType,
  },
  {
    id: 56,
    source: '30',
    target: '4',
    type: edgeType,
  },
  {
    id: 57,
    source: '31',
    target: '4',
    type: edgeType,
  },
  {
    id: 58,
    source: '32',
    target: '33',
    label: 's0',
    type: edgeType,
  },
  {
    id: 59,
    source: '32',
    target: '34',
    label: 's1',
    type: edgeType,
  },
  {
    id: 60,
    source: '33',
    target: '4',
    type: edgeType,
  },
  {
    id: 61,
    source: '34',
    target: '35',
    label: 's0',
    type: edgeType,
  },
  {
    id: 62,
    source: '34',
    target: '36',
    label: 's1',
    type: edgeType,
  },
  {
    id: 63,
    source: '35',
    target: 4,
    type: edgeType,
  },
  {
    id: 64,
    source: '36',
    target: 4,
    type: edgeType,
  },
  {
    id: 65,
    source: '37',
    target: '4',
    type: edgeType,
  },
  {
    id: 66,
    source: '38',
    target: '39',
    label: 's0',
    type: edgeType,
  },
  {
    id: 67,
    source: '38',
    target: '40',
    label: 's1',
    type: edgeType,
  },
  {
    id: 68,
    source: '39',
    target: '4',
    type: edgeType,
  },
  {
    id: 69,
    source: '40',
    target: '41',
    label: 's0',
    type: edgeType,
  },
  {
    id: 70,
    source: '40',
    target: '42',
    label: 's1',
    type: edgeType,
  },
  {
    id: 71,
    source: '41',
    target: '4',
    type: edgeType,
  },
  {
    id: 72,
    source: '42',
    target: '43',
    label: 's0',
    type: edgeType,
  },
  {
    id: 73,
    source: '42',
    target: '44',
    label: 's1',
    type: edgeType,
  },
  {
    id: 74,
    source: '43',
    target: '4',
    type: edgeType,
  },
  {
    id: 75,
    source: '44',
    target: '4',
    type: edgeType,
  },
  {
    id: 76,
    source: '45',
    target: '4',
    type: edgeType,
  },
  {
    id: 77,
    source: '46',
    target: '47',
    label: 's0',
    type: edgeType,
  },
  {
    id: 78,
    source: '46',
    target: '48',
    label: 's1',
    type: edgeType,
  },
  {
    id: 79,
    source: '47',
    target: '4',
    type: edgeType,
  },
  {
    id: 80,
    source: '48',
    target: '49',
    label: 's0',
    type: edgeType,
  },
  {
    id: 81,
    source: '48',
    target: '50',
    label: 's1',
    type: edgeType,
  },
  {
    id: 82,
    source: '49',
    target: '4',
    type: edgeType,
  },
  {
    id: 83,
    source: '50',
    target: '51',
    label: 's0',
    type: edgeType,
  },
  {
    id: 84,
    source: '50',
    target: '52',
    label: 's1',
    type: edgeType,
  },
  {
    id: 85,
    source: '51',
    target: '4',
    type: edgeType,
  },
  {
    id: 86,
    source: '52',
    target: '4',
    type: edgeType,
  },
  {
    id: 87,
    source: '53',
    target: '4',
    type: edgeType,
  },
  {
    id: 88,
    source: '54',
    target: '4',
    label: 's1',
    type: edgeType,
  },
  {
    id: 89,
    source: '54',
    target: '55',
    label: 's0',
    type: edgeType,
  },
  {
    id: 90,
    source: '55',
    target: '4',
    type: edgeType,
  },
  {
    id: 91,
    source: '56',
    target: '4',
    type: edgeType,
  },
  {
    id: 92,
    source: '57',
    target: '58',
    label: 's0',
    type: edgeType,
  },
  {
    id: 93,
    source: '57',
    target: '59',
    label: 's1',
    type: edgeType,
  },
  {
    id: 94,
    source: '58',
    target: '4',
    type: edgeType,
  },
  {
    id: 95,
    source: '59',
    target: '4',
    type: edgeType,
  },
  {
    id: 96,
    source: '60',
    target: '4',
    type: edgeType,
  },
  {
    id: 97,
    source: '61',
    target: '62',
    label: 's0',
    type: edgeType,
  },
  {
    id: 98,
    source: '61',
    target: '63',
    label: 's1',
    type: edgeType,
  },
  {
    id: 99,
    source: '62',
    target: '4',
    type: edgeType,
  },
  {
    id: 100,
    source: '63',
    target: '4',
    label: 's1',
    type: edgeType,
  },
  {
    id: 101,
    source: '63',
    target: '64',
    label: 's0',
    type: edgeType,
  },
  {
    id: 102,
    source: '64',
    target: '4',
    type: edgeType,
  },
  {
    id: 103,
    source: '65',
    target: '67',
    type: edgeType,
  },
  {
    id: 104,
    source: '66',
    target: '67',
    type: edgeType,
  },
]
