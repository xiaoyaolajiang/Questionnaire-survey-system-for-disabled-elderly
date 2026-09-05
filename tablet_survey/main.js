const FREQUENCY_4_OPTIONS = ["完全不会", "好几天", "超过一周", "几乎每天"];
const GAD_OPTIONS = ["完全不会", "好几天", "一半以上时间", "几乎每天"];
const YES_NO_UNKNOWN_OPTIONS = ["是", "不是", "无法判断"];
const ADL_SCORE_OPTIONS = ["1（自己可以做）", "2", "3", "4（根本不会）"];
const YES_NO_OPTIONS = ["没有", "有"];

const QUESTION_SECTIONS = [
  {
    id: "survey_id",
    title: "基本登记",
    instructions: "请根据现场登记信息填写。",
    questions: [
      textQ("Q001", 1, "序号、姓名、房间号", { key: "respondent_identifier", placeholder: "请输入序号、姓名、房间号" })
    ]
  },
  {
    id: "ltc_adl",
    title: "附件1-长期护理失能等级评估表 / C1 日常生活活动能力评估表",
    questions: [
      q("Q002", 2, "进食", ["较大或完全依赖，或有留置营养管", "需部分帮助（夹菜、盛饭）", "自理（在合理时间内能独立使用餐具进食各种食物，可使用辅助工具独立完成进食，但不包括做饭）"]),
      q("Q003", 3, "穿衣", ["依赖他人", "需要部分帮助（能自己穿脱衣服或假肢或矫形器，但需要他人帮助整理衣物，系扣/鞋带、拉拉链等）", "自理（自己系开纽扣，关开拉链和穿鞋、袜、假肢或矫形器等）"]),
      q("Q004", 4, "面部与口腔清洁", ["需要帮助", "独立洗脸、梳头、刷牙、剃须（不包括准备洗脸水、梳子、牙刷等准备工作）"]),
      q("Q005", 5, "大便控制", ["失禁（平均每周≥1次或完全不能控制大便排泄，需要完全依赖他人）", "偶有失禁（每周＜1次）需要他人提示或便秘需要人工帮助排便", "能控制"]),
      q("Q006", 6, "小便控制", ["失禁（平均每天≥1次或经常尿失禁，完全需要他人帮忙完成排尿行为；或留置导尿管，但无法自行管理导尿管）", "偶有失禁（每24h＜1次，但每周＞1次），或需要他人提示", "能控制（或留置导尿管，可自行管理导尿管）"]),
      q("Q007", 7, "用厕", ["需要极大地帮助或完全依赖他人", "需部分帮助（需他人帮忙整理衣裤、坐上/蹲上便器等）", "自理（能够使用厕纸、穿脱裤子等）"]),
      q("Q008", 8, "平地行走", ["卧床不起、不能步行、移动需要完全帮助", "在较大程度上依赖他人搀扶（≥2人）或依赖他人帮助使用轮椅等辅助工具才能移动", "需少量帮助（需1人搀扶或需他人在旁提示或在他人帮助下使用辅助工具）", "独立步行（自行使用辅助工具，在家及附近等日常生活活动范围内独立步行）"]),
      q("Q009", 9, "床椅转移", ["完全依赖他人，不能坐", "需大量帮助（至少2人，身体帮助），能坐", "需少量帮助（1人搀扶或使用拐杖等辅助工具或扶着墙、周围设施，转移时需他人在旁监护、提示）", "自理"]),
      q("Q010", 10, "上下楼", ["不能，或需极大帮助或完全依赖他人", "需要部分帮助（需扶着楼梯、他人搀扶、使用拐杖或需他人在旁提示）", "独立上下楼（可借助电梯等，如果使用支具，需可独自完成穿、脱动作）"]),
      q("Q011", 11, "洗澡", ["洗澡过程中需他人帮助", "准备好洗澡水后，可自己独立完成"])
    ]
  },
  {
    id: "ltc_cognition",
    title: "附件1-长期护理失能等级评估表 / C2 认知能力评估表",
    questions: [
      q("Q012", 12, "时间定向", ["无时间观念", "时间观念很差，年、月、日不清楚，可知上午、下午或白天、夜间", "时间观念较差，年、月、日不清楚，可知上半年或下半年或季节", "时间观念有些下降，年、月、日（或星期几）不能全部分清（相差两天或以上）", "时间观念（年、月）清楚，日期（或星期几）可相差一天"]),
      q("Q013", 13, "人物定向", ["不认识任何人（包括自己）", "只认识自己或极少数日常同住的亲人或照护者等", "能认识一半日常同住的亲人或照护者等，能称呼或知道关系等", "能认识大部分共同生活居住的人，能称呼或知道关系", "认识长期共同一起生活的人，能称呼并知道关系"]),
      q("Q014", 14, "空间定向", ["不能单独外出，无空间观念", "不能单独外出，少量知道自己居住或生活所在地的地址", "不能单独外出，但知道较多有关自己日常生活的地址", "不能单独外出，但能准确知道自己日常生活所在地的地址", "能在日常生活范围内单独外出，如在日常居住小区内独自外出购物等"]),
      q("Q015", 15, "记忆力", ["完全不能回忆即时信息，并且完全不能对既往事物进行正确的回忆", "对既往事物能有少部分正确的回忆，没有近期记忆", "能回忆大部分既往事物，记住1个词语", "能回忆大部分既往事物，记住2个词语", "能够完整回忆既往事物，记住3个词语"])
    ]
  },
  {
    id: "ltc_sense_comm",
    title: "附件1-长期护理失能等级评估表 / C3 感知觉与沟通能力评估表",
    questions: [
      q("Q016", 16, "视力", ["完全失明", "只能看到光、颜色和形状（大致轮廓），眼睛可随物体移动", "视力有限，看不清报纸大标题，但能辨认较大的物体", "能看清楚大字体，但看不清书报上的标准字体，辨别小物体有一定困难", "与日常生活能力相关的视力（如阅读书报、看电视等）基本正常"]),
      q("Q017", 17, "听力", ["完全失聪", "讲话者大声说话或说话很慢，才能部分听见", "正常交流有些困难，需在安静的环境大声说话才能听到", "在轻声说话或说话距离超过2米时听不清", "与日常生活习惯相关的听力基本正常（如能听到门铃、电视、电话等声音）"]),
      q("Q018", 18, "沟通能力", ["完全不能理解他人的言语，也无法表达", "不能完全理解他人的话，只能以简单的单词或手势表达大概意愿", "勉强可与他人交流，谈吐内容不清楚，需频繁重复或简化口头表达", "能够表达自己的需要或理解他人的话，但需要增加时间或给予帮助", "无困难，能与他人正常沟通和交流"])
    ]
  },
  {
    id: "basic",
    title: "附件2-一般资料调查表及疾病史 / 一般资料",
    questions: [
      q("Q019", 19, "性别", ["男", "女"], { key: "gender" }),
      textQ("Q020", 20, "年龄", { key: "age", inputType: "number", placeholder: "请输入年龄", min: 0, max: 120 }),
      q("Q021", 21, "文化程度", ["小学以下", "小学", "初中", "高中", "大专本科及以上"], { key: "education" }),
      q("Q022", 22, "退休", ["是", "否"], { key: "retired" }),
      textQ("Q023", 23, "职业", { key: "occupation", placeholder: "请输入职业" }),
      textQ("Q024", 24, "身高（cm）", { key: "height_cm", inputType: "number", placeholder: "请输入身高", min: 0, max: 260 }),
      textQ("Q025", 25, "体重（kg）", { key: "weight_kg", inputType: "number", placeholder: "请输入体重", min: 0, max: 300 }),
      q("Q026", 26, "婚姻情况", ["未婚", "已婚配偶健在", "丧偶", "离婚"], { key: "marital_status" }),
      q("Q027", 27, "居住情况", ["独居", "与伴侣居住", "与子女居住", "与保姆居住", "其他"], { key: "living_status" }),
      q("Q028", 28, "睡眠情况", ["正常", "睡眠质量差（入睡时间长但不超过30分钟，夜间觉醒≤2次）", "失眠（入睡时间＞30分钟，夜间觉醒＞2次，一周至少3次，持续一个月）"], { key: "sleep_status" }),
      q("Q029", 29, "锻炼身体", ["是（每周≥5d，每次≥30min，每周累计时间≥150min，持续≥6个月）", "否"], { key: "exercise" }),
      q("Q030", 30, "吸烟", ["是（每天≥1支，持续半年以上）", "否", "戒烟（已停止吸烟半年及以上）"], { key: "smoking" }),
      q("Q031", 31, "饮酒", ["是（每周≥1次，持续半年以上）", "否", "戒酒（已停止喝酒半年及以上）"], { key: "drinking" })
    ]
  },
  {
    id: "disease_history",
    title: "附件2-一般资料调查表及疾病史 / 疾病史",
    questions: [
      q("Q032", 32, "是否有以下疾病（可多选）", ["高血压", "血脂异常", "心脏疾病", "脑卒中", "糖尿病", "慢性肺部疾病", "肾脏疾病", "胃部疾病", "关节炎", "风湿", "血液系统疾病", "精神心理疾病", "阿尔茨海默", "视听觉障碍", "躯体活动障碍", "无既往病史"], { type: "multi", exclusiveValues: ["无既往病史"] })
    ]
  },
  {
    id: "phq9",
    title: "附件3-抑郁量表 PHQ-9",
    instructions: "根据过去两周的状况，请回答是否存在下列描述的状况及频率。",
    questions: [
      matrixQ("Q033", 33, "抑郁量表", [
        ["1", "做事时提不起劲或没有兴趣"],
        ["2", "感到心情低落、沮丧或绝望"],
        ["3", "入睡困难、睡不安稳或睡眠过多"],
        ["4", "感觉疲倦或没有活力"],
        ["5", "食欲不振或吃太多"],
        ["6", "觉得自己很糟，或觉得自己很失败，或让自己和家人失望"],
        ["7", "对事物专注有困难，例如阅读报纸或看电视时"],
        ["8", "动作或说话速度缓慢到别人已经察觉；或正好相反，烦躁或坐立不安、动来动去的情况更胜于平常"],
        ["9", "有不如死掉或用某种方式伤害自己的念头"]
      ], FREQUENCY_4_OPTIONS, { rowHeader: "项目" })
    ]
  },
  {
    id: "gad7",
    title: "附件4-广泛性焦虑量表",
    questions: [
      matrixQ("Q034", 34, "广泛性焦虑量表", [
        ["1", "感到紧张，焦虑或急切"],
        ["2", "不能停止或控制担忧"],
        ["3", "对各种各样事情担忧过多"],
        ["4", "很难放松下来"],
        ["5", "由于不安而无法静坐"],
        ["6", "变得容易烦恼或急躁"],
        ["7", "感到似乎将有可怕的事情发生而害怕"]
      ], GAD_OPTIONS, { rowHeader: "项目" })
    ]
  },
  {
    id: "ad8",
    title: "附件5-AD8",
    questions: [
      matrixQ("Q035", 35, "第一栏中的“是”表示在过去的几年中在认知能力方面（记忆或者思考）出现问题", [
        ["1", "判断力出现问题（在解决日常生活问题、经济问题有困难，如不会算账了，做出的决定下降经常出错；辨不清方向或容易迷路）"],
        ["2", "缺乏兴趣、爱好了，活动减少了。例如几乎整天和衣躺着看电视；平时厌恶外出，常闷在家里，身体懒得活动，无精打采"],
        ["3", "不断重复同一件事，例如总是提相同的问题，一句话重复多遍等"],
        ["4", "学习使用某些日常工具或者家用电器（比如遥控器、微波炉、VCD等）有困难"],
        ["5", "记不清当前的月份或者年份"],
        ["6", "处理个人财务困难（忘了如何使用存折，忘了付水、电、煤气账单等）"],
        ["7", "记不住和别人的约定，如忘记和家人已约好的聚会，拜访亲朋好友的计划"],
        ["8", "日常记忆和思考能力出现问题。例如自己放置的东西经常找不到；经常忘了服药；想不起熟人的名字；忘记要买的东西；忘记看过的电视、报纸、书籍的主要内容；与别人谈话时无法表达自己的意思等"]
      ], YES_NO_UNKNOWN_OPTIONS, { rowHeader: "项目" })
    ]
  },
  {
    id: "adl_iadl",
    title: "附件6-ADL + IADL",
    questions: [
      matrixQ("Q036", 36, "ADL（日常生活活动能力，各项最高分4分，最低分1分）", [
        ["1", "吃饭"],
        ["2", "穿脱衣服"],
        ["3", "洗漱"],
        ["4", "上下床、坐下和站起"],
        ["5", "室内走动"],
        ["6", "上厕所"],
        ["7", "大小便控制"],
        ["8", "洗澡"]
      ], ADL_SCORE_OPTIONS, { rowHeader: "项目" }),
      matrixQ("Q037", 37, "IADL（工具性日常生活活动能力，各项最高分4分，最低分1分）", [
        ["1", "自己搭乘公共汽车（坐哪一路，并能独自去）"],
        ["2", "在住地附近活动"],
        ["3", "自己做饭（包括洗菜、切菜、打火、生活等）"],
        ["4", "吃药（能记住按时服药，且能服用正确的药）"],
        ["5", "一般轻家务（如扫地、擦桌子等）"],
        ["6", "较重家务（如擦地、擦窗、搬东西等）"],
        ["7", "洗自己的衣服"],
        ["8", "剪脚趾甲"],
        ["9", "购物"],
        ["10", "使用电话（必须会拨号）"],
        ["11", "管理个人钱财（即自己能买东西、找零钱、算钱等）"],
        ["12", "独自在家（是否能独自在家待一天）"]
      ], ADL_SCORE_OPTIONS, { rowHeader: "项目" })
    ]
  },
  {
    id: "physical_activity_leisure",
    title: "附件7-老年人体力活动量表 / 一、休闲活动",
    instructions: "为了解过去七天内，您在休闲时间、家务和工作方面的活动情况，请按照自己的情况如实填写。",
    questions: [
      q("Q038", 38, "1. 在过去的七天内，您参加坐着的活动的频率如何，例如阅读、看电视、做手工、喝茶、网购、打牌、下棋等？", [opt("A. 从不", "Q040"), opt("B. 甚少（1-2天）", "Q039"), opt("C. 有时候（3-4天）", "Q039"), opt("D. 经常（5-7天）", "Q040")]),
      q("Q039", 39, "1b. 您平均每天从事多少小时这些坐着的活动？", ["A. 少于1小时", "B. 1-2小时", "C. 2-4小时", "D. 多于4小时"]),
      q("Q040", 40, "2. 在过去七天内，您因为任何原因步行到家外面或院子里的频率如何，例如为了娱乐或运动，步行去买菜、散步、遛狗等？", [opt("A. 从不", "Q042"), opt("B. 甚少（1-2天）", "Q041"), opt("C. 有时候（3-4天）", "Q041"), opt("D. 经常（5-7天）", "Q041")]),
      q("Q041", 41, "2a. 您平均每天花多少小时步行？", ["A. 少于1小时", "B. 1-2小时", "C. 2-4小时", "D. 多于4小时"]),
      q("Q042", 42, "3. 在过去七天内，您从事轻量运动或娱乐活动的频率如何，例如打太极、老年操、扭秧歌、钓鱼、打门球等？", [opt("A. 从不", "Q044"), opt("B. 甚少（1-2天）", "Q043"), opt("C. 有时候（3-4天）", "Q043"), opt("D. 经常（5-7天）", "Q043")]),
      q("Q043", 43, "3b. 您平均每天从事多少小时这些轻量运动或娱乐活动？", ["A. 少于1小时", "B. 1-2小时", "C. 2-4小时", "D. 多于4小时"]),
      q("Q044", 44, "4. 在过去七天内，您从事中量运动或娱乐活动的频率如何，例如交际舞、放风筝、溜冰、快走等？", [opt("A. 从不", "Q046"), opt("B. 甚少（1-2天）", "Q045"), opt("C. 有时候（3-4天）", "Q045"), opt("D. 经常（5-7天）", "Q045")]),
      q("Q045", 45, "4b. 您平均每天从事多少小时这些中量运动或娱乐活动？", ["A. 少于1小时", "B. 1-2小时", "C. 2-4小时", "D. 多于4小时"]),
      q("Q046", 46, "5. 在过去七天内，您从事吃力的运动或娱乐活动的频率如何，例如慢跑、游泳、骑自行车、双人羽毛球、广场舞、滑雪等？", [opt("A. 从不", "Q048"), opt("B. 甚少（1-2天）", "Q047"), opt("C. 有时候（3-4天）", "Q047"), opt("D. 经常（5-7天）", "Q047")]),
      q("Q047", 47, "5b. 您平均每天从事多少小时这些吃力的运动或娱乐活动？", ["A. 少于1小时", "B. 1-2小时", "C. 2-4小时", "D. 多于4小时"]),
      q("Q048", 48, "6. 在过去七天内，您做任何增加肌肉强度和耐力的运动的频率如何，例如举重、俯卧撑、平板支撑等？", [opt("A. 从不", "Q050"), opt("B. 甚少（1-2天）", "Q049"), opt("C. 有时候（3-4天）", "Q049"), opt("D. 经常（5-7天）", "Q049")]),
      q("Q049", 49, "6b. 您平均每天从事多少小时增加肌肉强度和耐力的运动？", ["A. 少于1小时", "B. 1-2小时", "C. 2-4小时", "D. 多于4小时"])
    ]
  },
  {
    id: "physical_activity_housework",
    title: "附件7-老年人体力活动量表 / 二、家务活动",
    questions: [
      q("Q050", 50, "7. 在过去七天内，您做过任何简单的家务吗，例如清扫灰尘、做饭、洗碗等？", ["A. 没有", "B. 有"]),
      q("Q051", 51, "8. 在过去七天内，您做过任何粗重的家务或搬运杂物，例如吸尘、擦地板、擦玻璃、手洗衣物或搬桶装水等？", ["A. 没有", "B. 有"]),
      matrixQ("Q052", 52, "9. 在过去七天内，您有没有从事任何以下的活动？", [
        ["a", "家具维修，例如油漆、铺墙纸、电工等"],
        ["b", "草坪或围栏打理，包括清除雪或树叶、砍木等"],
        ["c", "户外园艺"],
        ["d", "照顾其他人，例如小孩、伴侣或其他成年人"]
      ], YES_NO_OPTIONS, { rowHeader: "活动" })
    ]
  },
  {
    id: "physical_activity_work",
    title: "附件7-老年人体力活动量表 / 三、工作相关活动",
    questions: [
      q("Q053", 53, "10. 在过去七天内，您有没有做有薪工作或志愿者？", [opt("A. 没有", "Q055"), opt("B. 有", "Q054")]),
      q("Q054", 54, "10b. 以下哪个类别最好地描述您的工作或志愿者工作所要求的体能活动总量？", ["A. 主要坐着以及轻松的手臂运动（例如办公室人员、收银员、坐着的装配线工人、公车司机等）", "B. 坐着或站着以及一些步行（例如门卫、电工、维修、卖早点、一般办公室人员等）", "C. 步行，以及应付一般轻于45斤的材料（例如送奶工、快递员、服务员、工地工人等）", "D. 步行以及经常要求重劳力去应付重于45斤的材料（例如送水工、农场或一般劳工等）"])
    ]
  },
  {
    id: "mna",
    title: "附件8-微型营养评估简表（MNA）",
    questions: [
      q("Q055", 55, "1. 过去3个月内有没有因为食欲下降、消化问题、咀嚼或吞咽困难而减少食量？", ["① 食物摄入量严重减少", "② 食物摄入量中度减少", "③ 无变化"]),
      q("Q056", 56, "2. 过去3个月内体重下降的情况", ["① 体重下降＞3kg", "② 体重下降1-3kg", "③ 体重没下降", "④ 不知道"]),
      q("Q057", 57, "3. 活动能力", ["① 需长期卧床或坐轮椅", "② 可以下床或离开轮椅，但不能外出", "③ 能独立外出"]),
      q("Q058", 58, "4. 过去3个月内有没有受到心理创伤或患急性疾病？", ["① 有", "② 无"]),
      q("Q059", 59, "5. 精神心理问题", ["① 严重智力减退或抑郁", "② 轻度智力减退", "③ 无问题"]),
      q("Q060", 60, "6. 身体质量指数 BMI（kg/m²）", ["① BMI＜19", "② 19≤BMI＜21", "③ 21≤BMI＜23", "④ BMI≥23"])
    ]
  }
];

function opt(label, nextId) {
  return { label, value: label, nextId };
}

function q(id, localIndex, text, options, extra = {}) {
  return {
    id,
    localIndex,
    text,
    options,
    type: extra.type || "single",
    ...extra
  };
}

function textQ(id, localIndex, text, extra = {}) {
  return q(id, localIndex, text, [], {
    type: "text",
    inputType: extra.inputType || "text",
    placeholder: extra.placeholder || "请输入",
    ...extra
  });
}

function matrixQ(id, localIndex, text, rows, columns, extra = {}) {
  return q(id, localIndex, text, [], {
    type: "matrix",
    rows: rows.map(([key, label]) => ({ key, label })),
    columns,
    ...extra
  });
}

function buildQuestions() {
  return QUESTION_SECTIONS.flatMap((section) => {
    return section.questions.map((question) => ({
      ...question,
      sectionId: section.id,
      sectionTitle: section.title,
      sectionInstructions: section.instructions || "",
      answerKey: section.answerKey || section.id,
      options: normalizeOptions(question.options || [], question.type)
    }));
  });
}

function normalizeOptions(options, questionType = "single") {
  return options.map((option, index) => {
    if (typeof option === "string") {
      return { label: option, value: questionType === "multi" ? option : String(index + 1) };
    }
    return { value: String(option.value || option.label), ...option };
  });
}

const allQuestions = buildQuestions();
const CONSENT_CAPTURE = {
  id: "CONSENT",
  sectionId: "consent",
  sectionTitle: "知情协议",
  text: "知情协议阅读与确认"
};

const state = {
  currentIndex: 0,
  navigationStack: [],
  stream: null,
  recorder: null,
  chunks: [],
  screenStream: null,
  screenRecorder: null,
  screenChunks: [],
  answers: [],
  videos: [],
  timeline: [],
  rerecordingCounts: {},
  activeRecording: null,
  activeScreenRecording: null,
  consentRecord: null,
  compatibility: {},
  recordingStartedAt: 0,
  recordingStartedAtEpoch: 0,
  screenRecordingReferenceEpoch: 0,
  questionStartedAt: 0,
  questionStartedAtEpoch: 0,
  timerId: null,
  sessionId: createSessionId(),
  selectedMimeType: "",
  cameraPermissionRequested: false,
  cameraRecordingEnabled: false,
  cameraFacingMode: "user",
  pendingQuestionRecordings: {},
  db: null
};

const els = {
  cameraPreview: document.getElementById("cameraPreview"),
  cameraPlaceholder: document.getElementById("cameraPlaceholder"),
  recordingPill: document.getElementById("recordingPill"),
  currentQuestionLabel: document.getElementById("currentQuestionLabel"),
  questionTimer: document.getElementById("questionTimer"),
  videoCount: document.getElementById("videoCount"),
  stepLabel: document.getElementById("stepLabel"),
  screenTitle: document.getElementById("screenTitle"),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  coverScreen: document.getElementById("coverScreen"),
  consentScreen: document.getElementById("consentScreen"),
  questionScreen: document.getElementById("questionScreen"),
  finishScreen: document.getElementById("finishScreen"),
  compatList: document.getElementById("compatList"),
  rerunCheckBtn: document.getElementById("rerunCheckBtn"),
  beginAssessmentBtn: document.getElementById("beginAssessmentBtn"),
  consentAgreeBtn: document.getElementById("consentAgreeBtn"),
  consentRecordNotice: document.getElementById("consentRecordNotice"),
  sectionName: document.getElementById("sectionName"),
  questionIndexText: document.getElementById("questionIndexText"),
  questionText: document.getElementById("questionText"),
  answerHost: document.getElementById("answerHost"),
  cameraToggleBtn: document.getElementById("cameraToggleBtn"),
  cameraSwitchBtn: document.getElementById("cameraSwitchBtn"),
  cameraControlStatus: document.getElementById("cameraControlStatus"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  finishSummary: document.getElementById("finishSummary"),
  exportStatus: document.getElementById("exportStatus"),
  exportBtn: document.getElementById("exportBtn"),
  newSessionBtn: document.getElementById("newSessionBtn")
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  state.db = await openCaptureDb().catch(() => null);
  state.compatibility = collectCompatibility();
  renderCompatibility();
  showScreen("cover");
  els.stepLabel.textContent = "评估准备";
  els.screenTitle.textContent = "开始评估";
  updateProgress();

  if (els.rerunCheckBtn) {
    els.rerunCheckBtn.addEventListener("click", () => {
      state.compatibility = collectCompatibility();
      renderCompatibility();
    });
  }
  els.beginAssessmentBtn.addEventListener("click", beginAssessment);
  els.consentAgreeBtn.addEventListener("click", agreeConsentAndStartSurvey);
  els.cameraToggleBtn.addEventListener("click", toggleCameraRecording);
  els.cameraSwitchBtn.addEventListener("click", switchCameraFacingMode);
  els.prevBtn.addEventListener("click", handlePreviousQuestion);
  els.nextBtn.addEventListener("click", handleNextQuestion);
  els.exportBtn.addEventListener("click", exportZip);
  els.newSessionBtn.addEventListener("click", () => window.location.reload());
}

function collectCompatibility() {
  const mimeType = chooseMimeType();
  state.selectedMimeType = mimeType;
  const protocol = window.location.protocol;
  const checks = [
    { key: "protocol", label: "当前打开协议", ok: protocol === "https:" || protocol === "http:" || protocol === "file:", value: protocol },
    { key: "secureContext", label: "安全上下文", ok: window.isSecureContext || protocol === "file:", value: String(window.isSecureContext) },
    { key: "getUserMedia", label: "摄像头 API", ok: Boolean(navigator.mediaDevices && navigator.mediaDevices.getUserMedia), value: "getUserMedia" },
    { key: "getDisplayMedia", label: "屏幕录制 API", ok: Boolean(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia), value: "getDisplayMedia" },
    { key: "mediaRecorder", label: "视频录制 API", ok: "MediaRecorder" in window, value: "MediaRecorder" },
    { key: "mimeType", label: "录制格式", ok: Boolean(mimeType) || "MediaRecorder" in window, value: mimeType || "浏览器默认" },
    { key: "indexedDb", label: "IndexedDB 暂存", ok: "indexedDB" in window, value: "IndexedDB" },
    { key: "fileSystemAccess", label: "文件保存 API", ok: "showSaveFilePicker" in window, value: "File System Access API" },
    { key: "downloadFallback", label: "普通下载兜底", ok: Boolean(URL && URL.createObjectURL), value: "Blob URL" }
  ];

  return {
    generatedAt: new Date().toISOString(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    protocol,
    selectedMimeType: mimeType || "browser-default",
    checks
  };
}

function renderCompatibility() {
  if (!els.compatList) return;
  els.compatList.innerHTML = "";
  state.compatibility.checks.forEach((check) => {
    const item = document.createElement("div");
    item.className = "compat-item";
    item.innerHTML = `
      <span>${escapeHtml(check.label)}：${escapeHtml(check.value)}</span>
      <strong class="compat-state ${check.ok ? "ok" : "fail"}">${check.ok ? "可用" : "待验证"}</strong>
    `;
    els.compatList.appendChild(item);
  });
}

async function beginAssessment() {
  window.alert("进入问卷后，工作人员可在题目页面手动开启或结束摄像头录制。摄像头画面不会在页面中展示；若不允许开启，后续将仅以问卷形式继续。");

  state.screenRecordingReferenceEpoch = Date.now();
  els.beginAssessmentBtn.disabled = true;
  els.beginAssessmentBtn.textContent = "正在准备...";
  showConsentScreen();
  els.beginAssessmentBtn.disabled = false;
  els.beginAssessmentBtn.textContent = "开始评估";
}

async function requestCamera({ showAlert = true } = {}) {
  state.cameraPermissionRequested = true;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    state.compatibility.cameraPermission = "unsupported";
    if (showAlert) alert("当前设备暂时无法开启摄像头，请联系工作人员处理。");
    await saveSessionSnapshot();
    return false;
  }

  try {
    state.stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: state.cameraFacingMode },
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    });
    els.cameraPreview.srcObject = state.stream;
    els.cameraPlaceholder.classList.add("is-hidden");
    state.stream.getVideoTracks().forEach((track) => {
      track.onended = () => {
        state.cameraRecordingEnabled = false;
        updateCameraControlUi();
      };
    });
    state.compatibility.cameraPermission = "granted";
    state.compatibility.cameraFacingMode = state.cameraFacingMode;
    await saveSessionSnapshot();
    return true;
  } catch (error) {
    state.compatibility.cameraPermission = "denied-or-failed";
    state.compatibility.cameraError = error.message;
    if (showAlert) alert("当前未能开启摄像头，请联系工作人员处理，或继续完成问卷。");
    await saveSessionSnapshot();
    return false;
  }
}

async function requestScreenCapture({ showAlert = true } = {}) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
    state.compatibility.screenPermission = "unsupported";
    if (showAlert) alert("当前浏览器暂不支持网页录屏，将继续进行问卷和摄像头记录。");
    await saveSessionSnapshot();
    return false;
  }

  try {
    state.screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false
    });
    state.screenStream.getAudioTracks().forEach((track) => track.stop());
    state.screenStream.getVideoTracks().forEach((track) => {
      track.onended = () => {
        state.compatibility.screenPermission = "ended-by-user";
      };
    });
    state.compatibility.screenPermission = "granted";
    await saveSessionSnapshot();
    return true;
  } catch (error) {
    state.compatibility.screenPermission = "denied-or-failed";
    state.compatibility.screenError = error.message;
    if (showAlert) alert("当前未能开启屏幕录制，将继续进行问卷和摄像头记录。");
    await saveSessionSnapshot();
    return false;
  }
}

async function showConsentScreen() {
  showScreen("consent");
  els.stepLabel.textContent = "知情协议";
  els.screenTitle.textContent = "阅读并确认";
  els.currentQuestionLabel.textContent = "CONSENT";
  updateProgress(0);

  els.consentRecordNotice.textContent = "";
  setRecordingState(false, "");
}

async function agreeConsentAndStartSurvey() {
  els.consentAgreeBtn.disabled = true;
  els.consentAgreeBtn.textContent = "正在进入问卷...";
  try {
    if (hasActiveRecording()) {
      const recordings = await stopAllRecordings(CONSENT_CAPTURE);
      const timelineEntry = appendTimelineEntry(CONSENT_CAPTURE, recordings, {
        itemType: "consent",
        answerValue: null,
        answerLabel: null
      });
      state.consentRecord = {
        consented: true,
        consentedAt: new Date().toISOString(),
        durationMs: recordings.durationMs,
        startedAt: timelineEntry.startedAt,
        endedAt: timelineEntry.endedAt,
        relativeStartMs: timelineEntry.relativeStartMs,
        relativeEndMs: timelineEntry.relativeEndMs,
        videoFileName: recordings.faceVideo ? recordings.faceVideo.fileName : null,
        faceVideoFileName: recordings.faceVideo ? recordings.faceVideo.fileName : null,
        screenVideoFileName: recordings.screenVideo ? recordings.screenVideo.fileName : null
      };
    } else {
      state.consentRecord = {
        consented: true,
        consentedAt: new Date().toISOString(),
        durationMs: null,
        startedAt: null,
        endedAt: new Date().toISOString(),
        relativeStartMs: null,
        relativeEndMs: relativeMsFromReference(Date.now()),
        videoFileName: null
      };
    }
    await saveSessionSnapshot();
    await startSurvey();
  } catch (error) {
    alert(`进入问卷失败：${error.message}`);
  } finally {
    els.consentAgreeBtn.disabled = false;
    els.consentAgreeBtn.textContent = "我已经仔细阅读，并同意以上相关协议";
  }
}

async function startSurvey() {
  showScreen("question");
  state.currentIndex = 0;
  state.navigationStack = [0];
  state.rerecordingCounts = {};
  await renderCurrentQuestion();
}

async function renderCurrentQuestion() {
  const question = allQuestions[state.currentIndex];
  if (!question) {
    await finishSurvey();
    return;
  }

  els.stepLabel.textContent = question.sectionTitle;
  els.screenTitle.textContent = "请作答当前题目";
  els.sectionName.textContent = `${question.sectionTitle} · 第 ${question.localIndex} 题`;
  els.questionIndexText.textContent = question.id;
  els.questionText.textContent = question.text;
  els.currentQuestionLabel.textContent = question.id;
  renderAnswerControl(question);
  restorePreviousAnswer(question);
  updatePreviousButton();
  updateCameraControlUi();
  updateProgress();
  state.questionStartedAt = performance.now();
  state.questionStartedAtEpoch = Date.now();
  if (state.cameraRecordingEnabled && canRecordVideo()) {
    await startFaceRecordingForCurrentQuestion(question);
  } else {
    setRecordingState(false, "");
  }
}

function renderAnswerControl(question) {
  els.answerHost.innerHTML = "";

  if (question.sectionInstructions) {
    const instructions = document.createElement("p");
    instructions.className = "question-instructions";
    instructions.textContent = question.sectionInstructions;
    els.answerHost.appendChild(instructions);
  }

  if (question.image) {
    const image = document.createElement("img");
    image.className = "question-image";
    image.src = question.image;
    image.alt = `${question.id} 题目说明图`;
    els.answerHost.appendChild(image);
  }

  if (question.type === "single" || question.type === "scale") {
    const group = document.createElement("div");
    group.className = "option-grid";
    group.setAttribute("role", "radiogroup");
    question.options.forEach((item) => {
      const optionEl = document.createElement("label");
      optionEl.className = "option-item";
      optionEl.innerHTML = `
        <input type="radio" name="answer" value="${escapeHtml(item.value)}" data-label="${escapeHtml(item.label)}">
        <span>${escapeHtml(item.label)}</span>
      `;
      group.appendChild(optionEl);
    });
    els.answerHost.appendChild(group);
    return;
  }

  if (question.type === "multi") {
    const group = document.createElement("div");
    group.className = "option-grid";
    group.setAttribute("role", "group");
    question.options.forEach((item) => {
      const option = document.createElement("label");
      option.className = "option-item";
      option.innerHTML = `
        <input type="checkbox" name="answer" value="${escapeHtml(item.value)}" data-label="${escapeHtml(item.label)}">
        <span>${escapeHtml(item.label)}</span>
      `;
      group.appendChild(option);
    });
    els.answerHost.appendChild(group);
    if (question.options.some((item) => item.needsText)) {
      const otherInput = document.createElement("input");
      otherInput.className = "field-input";
      otherInput.id = "otherTextInput";
      otherInput.type = "text";
      otherInput.placeholder = "如选择“其他”，请在此说明";
      els.answerHost.appendChild(otherInput);
    }
    return;
  }

  if (question.type === "matrix") {
    const wrapper = document.createElement("div");
    wrapper.className = "matrix-wrap";
    const table = document.createElement("table");
    table.className = "matrix-table";
    table.innerHTML = `
      <thead>
        <tr>
          <th scope="col">${escapeHtml(question.rowHeader || "项目")}</th>
          ${question.columns.map((column) => `<th scope="col">${escapeHtml(column)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${question.rows.map((row) => `
          <tr>
            <th scope="row">${escapeHtml(row.key)}. ${escapeHtml(row.label)}</th>
            ${question.columns.map((column, index) => `
              <td>
                <label class="matrix-choice" aria-label="${escapeHtml(row.key)} ${escapeHtml(column)}">
                  <input type="radio" name="answer_${escapeHtml(row.key)}" value="${index + 1}" data-label="${escapeHtml(column)}">
                  <span></span>
                </label>
              </td>
            `).join("")}
          </tr>
        `).join("")}
      </tbody>
    `;
    wrapper.appendChild(table);
    els.answerHost.appendChild(wrapper);
    return;
  }

  const input = document.createElement("input");
  input.className = "field-input";
  input.id = "answerInput";
  input.type = question.inputType || question.type;
  input.placeholder = question.placeholder || "请输入";
  if (typeof question.min !== "undefined") input.min = question.min;
  if (typeof question.max !== "undefined") input.max = question.max;
  els.answerHost.appendChild(input);
  input.focus({ preventScroll: true });
}

function restorePreviousAnswer(question) {
  const previousAnswer = [...state.answers].reverse().find((answer) => answer.questionId === question.id);
  if (!previousAnswer) return;

  if (question.type === "single" || question.type === "scale") {
    const input = els.answerHost.querySelector(`input[name='answer'][value="${cssEscape(previousAnswer.answerValue)}"]`);
    if (input) input.checked = true;
    return;
  }

  if (question.type === "multi" && Array.isArray(previousAnswer.answerValue)) {
    previousAnswer.answerValue.forEach((value) => {
      if (String(value).startsWith("其他说明：")) return;
      const input = els.answerHost.querySelector(`input[name='answer'][value="${cssEscape(value)}"]`);
      if (input) input.checked = true;
    });
    const otherDetail = previousAnswer.answerValue.find((value) => String(value).startsWith("其他说明："));
    const otherInput = els.answerHost.querySelector("#otherTextInput");
    if (otherInput && otherDetail) otherInput.value = String(otherDetail).replace("其他说明：", "");
    return;
  }

  if (question.type === "matrix" && previousAnswer.answerValue && typeof previousAnswer.answerValue === "object") {
    Object.entries(previousAnswer.answerValue).forEach(([key, value]) => {
      const input = els.answerHost.querySelector(`input[name='answer_${cssEscape(key)}'][value="${cssEscape(value)}"]`);
      if (input) input.checked = true;
    });
    return;
  }

  const input = els.answerHost.querySelector("#answerInput");
  if (input) input.value = previousAnswer.answerValue ?? "";
}

function updatePreviousButton() {
  if (!els.prevBtn) return;
  const canGoBack = state.navigationStack.length > 1;
  els.prevBtn.disabled = !canGoBack;
  els.prevBtn.classList.toggle("is-hidden", !canGoBack);
}

function updateCameraControlUi() {
  if (!els.cameraToggleBtn || !els.cameraControlStatus) return;
  const isActive = hasActiveFaceRecording();
  const isCameraOn = isActive || state.cameraRecordingEnabled || hasLiveCameraStream();
  const facingLabel = state.cameraFacingMode === "environment" ? "后置" : "前置";
  els.cameraToggleBtn.textContent = isActive || state.cameraRecordingEnabled ? "结束摄像头录制" : "开始摄像头录制";
  els.cameraToggleBtn.classList.toggle("is-recording", isActive || state.cameraRecordingEnabled);
  els.cameraControlStatus.textContent = isActive ? `${facingLabel}摄像头录制中` : "摄像头未录制";
  if (els.cameraSwitchBtn) {
    els.cameraSwitchBtn.classList.toggle("is-hidden", !isCameraOn);
    els.cameraSwitchBtn.textContent = state.cameraFacingMode === "environment" ? "切换为前置摄像头" : "切换为后置摄像头";
  }
}

async function toggleCameraRecording() {
  if (hasActiveFaceRecording() || state.cameraRecordingEnabled) {
    await stopManualCameraRecording();
  } else {
    await startManualCameraRecording();
  }
}

async function startManualCameraRecording() {
  const question = allQuestions[state.currentIndex];
  if (!question) return;

  els.cameraToggleBtn.disabled = true;
  els.cameraToggleBtn.textContent = "正在开启...";
  try {
    const pending = state.pendingQuestionRecordings[question.id];
    if (pending?.recordings?.faceVideo) {
      state.rerecordingCounts[question.id] = Math.max(state.rerecordingCounts[question.id] || 0, (pending.recordings.faceVideo.recordingAttempt || 0) + 1);
    }
    if (!state.stream || !state.stream.getVideoTracks().some((track) => track.readyState === "live")) {
      const granted = await requestCamera({ showAlert: true });
      if (!granted) return;
    }
    state.cameraRecordingEnabled = true;
    await startFaceRecordingForCurrentQuestion(question);
  } catch (error) {
    state.cameraRecordingEnabled = false;
    alert(`开启摄像头录制失败：${error.message}`);
  } finally {
    els.cameraToggleBtn.disabled = false;
    updateCameraControlUi();
    await saveSessionSnapshot();
  }
}

async function stopManualCameraRecording() {
  const question = allQuestions[state.currentIndex];
  if (!question) return;

  els.cameraToggleBtn.disabled = true;
  els.cameraToggleBtn.textContent = "正在结束...";
  try {
    state.cameraRecordingEnabled = false;
    if (hasActiveFaceRecording()) {
      const recordings = await stopFaceRecordingForCurrentQuestion(question);
      const timelineEntry = appendTimelineEntry(question, recordings, {
        itemType: "question",
        answerValue: null,
        answerLabel: null
      });
      rememberPendingRecording(question, recordings, timelineEntry);
    }
    stopCamera();
  } catch (error) {
    alert(`结束摄像头录制失败：${error.message}`);
  } finally {
    els.cameraToggleBtn.disabled = false;
    updateCameraControlUi();
    await saveSessionSnapshot();
  }
}

async function switchCameraFacingMode() {
  const question = allQuestions[state.currentIndex];
  if (!question || !state.cameraRecordingEnabled) return;

  els.cameraSwitchBtn.disabled = true;
  els.cameraToggleBtn.disabled = true;
  const previousFacingMode = state.cameraFacingMode;
  const nextFacingMode = previousFacingMode === "environment" ? "user" : "environment";
  els.cameraSwitchBtn.textContent = "正在切换...";
  try {
    if (hasActiveFaceRecording()) {
      const recordings = await stopFaceRecordingForCurrentQuestion(question);
      const timelineEntry = appendTimelineEntry(question, recordings, {
        itemType: "question",
        answerValue: null,
        answerLabel: null
      });
      rememberPendingRecording(question, recordings, timelineEntry);
      state.rerecordingCounts[question.id] = Math.max(state.rerecordingCounts[question.id] || 0, (recordings.faceVideo?.recordingAttempt || 0) + 1);
    }

    stopCamera();
    state.cameraFacingMode = nextFacingMode;
    let granted = await requestCamera({ showAlert: false });
    if (!granted) {
      state.cameraFacingMode = previousFacingMode;
      granted = await requestCamera({ showAlert: false });
    }
    if (!granted) {
      state.cameraRecordingEnabled = false;
      alert("切换摄像头失败，当前设备或浏览器可能不支持在网页中切换前后摄像头。");
      return;
    }
    await startFaceRecordingForCurrentQuestion(question);
  } catch (error) {
    state.cameraRecordingEnabled = false;
    alert(`切换摄像头失败：${error.message}`);
  } finally {
    els.cameraSwitchBtn.disabled = false;
    els.cameraToggleBtn.disabled = false;
    updateCameraControlUi();
    await saveSessionSnapshot();
  }
}

async function finalizeQuestionCapture(question, answer) {
  let recordings = emptyRecordings();
  let timelineEntry = null;
  const pending = consumePendingRecording(question);
  const recordingClips = pending?.clips ? [...pending.clips] : (pending ? [pending] : []);

  if (hasActiveRecording()) {
    recordings = await stopAllRecordings(question);
    timelineEntry = appendTimelineEntry(question, recordings, {
      itemType: "question",
      answerValue: answer.value,
      answerLabel: answer.label
    });
    recordingClips.forEach((clip) => applyAnswerToTimelineEntry(clip.timelineEntry, answer));
    recordingClips.push({ recordings, timelineEntry });
  } else if (pending) {
    recordings = pending.recordings;
    timelineEntry = pending.timelineEntry;
    recordingClips.forEach((clip) => applyAnswerToTimelineEntry(clip.timelineEntry, answer));
  } else {
    timelineEntry = appendTimelineEntry(question, recordings, {
      itemType: "question",
      answerValue: answer.value,
      answerLabel: answer.label,
      startedAtEpoch: state.questionStartedAtEpoch,
      endedAtEpoch: Date.now()
    });
  }

  return {
    recordings,
    timelineEntry,
    recordingClips,
    durationMs: recordings.durationMs || Math.max(0, Date.now() - (state.questionStartedAtEpoch || Date.now()))
  };
}

function applyAnswerToTimelineEntry(timelineEntry, answer) {
  timelineEntry.answerValue = answer.value;
  timelineEntry.answerLabel = answer.label;
}

function rememberPendingRecording(question, recordings, timelineEntry) {
  const previous = state.pendingQuestionRecordings[question.id];
  const clips = previous?.clips ? [...previous.clips] : (previous ? [previous] : []);
  const current = { recordings, timelineEntry };
  clips.push(current);
  state.pendingQuestionRecordings[question.id] = { ...current, clips };
}

function consumePendingRecording(question) {
  const pending = state.pendingQuestionRecordings[question.id] || null;
  if (pending) delete state.pendingQuestionRecordings[question.id];
  return pending;
}

function discardPendingRecordingForQuestion(question) {
  if (!question) return;
  const pending = consumePendingRecording(question);
  if (!pending) return;
  const clips = pending.clips || [pending];
  const fileNames = clips.flatMap((clip) => [
    clip.recordings.faceVideo?.fileName,
    clip.recordings.screenVideo?.fileName
  ]).filter(Boolean);
  const segmentIds = clips.map((clip) => clip.timelineEntry.segmentId);
  state.videos = state.videos.filter((video) => !fileNames.includes(video.fileName));
  state.timeline = state.timeline.filter((entry) => !segmentIds.includes(entry.segmentId));
  els.videoCount.textContent = String(state.videos.length);
}

function collectClipFileNames(clips, captureType) {
  return (clips || [])
    .map((clip) => captureType === "screen" ? clip.recordings.screenVideo : clip.recordings.faceVideo)
    .filter(Boolean)
    .map((video) => video.fileName);
}

function emptyRecordings() {
  return {
    faceVideo: null,
    screenVideo: null,
    durationMs: null,
    startedAtEpoch: state.questionStartedAtEpoch || Date.now(),
    endedAtEpoch: Date.now()
  };
}

async function handleNextQuestion() {
  const question = allQuestions[state.currentIndex];
  const answer = readAnswer(question);
  if (!answer.valid) {
    alert(answer.message);
    return;
  }

  els.nextBtn.disabled = true;
  els.prevBtn.disabled = true;
  els.nextBtn.textContent = "正在进入下一题...";
  try {
    const captureResult = await finalizeQuestionCapture(question, answer);
    const recordings = captureResult.recordings;
    const timelineEntry = captureResult.timelineEntry;
    const video = recordings.faceVideo;
    const screenVideo = recordings.screenVideo;
    const durationMs = captureResult.durationMs;
    const faceVideoFileNames = collectClipFileNames(captureResult.recordingClips, "face");
    const screenVideoFileNames = collectClipFileNames(captureResult.recordingClips, "screen");
    const answerRecord = {
      recordId: `${question.id}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      questionId: question.id,
      sectionId: question.sectionId,
      sectionTitle: question.sectionTitle,
      questionText: question.text,
      answerValue: answer.value,
      answerLabel: answer.label,
      answeredAt: new Date().toISOString(),
      startedAt: timelineEntry.startedAt,
      endedAt: timelineEntry.endedAt,
      relativeStartMs: timelineEntry.relativeStartMs,
      relativeEndMs: timelineEntry.relativeEndMs,
      recordingAttempt: video ? video.recordingAttempt : getCurrentRecordingAttempt(question),
      isRerecording: (video ? video.recordingAttempt > 0 : getCurrentRecordingAttempt(question) > 0) || (screenVideo ? screenVideo.recordingAttempt > 0 : false),
      isLatestForQuestion: true,
      durationMs,
      videoFileName: video ? video.fileName : null,
      faceVideoFileName: video ? video.fileName : null,
      faceVideoFileNames,
      screenVideoFileName: screenVideo ? screenVideo.fileName : null,
      screenVideoFileNames
    };
    state.answers.forEach((item) => {
      if (item.questionId === question.id) item.isLatestForQuestion = false;
    });
    state.answers.push(answerRecord);
    if (state.db) await putStoreValue("answers", answerRecord);
    await saveSessionSnapshot();

    const nextIndex = getNextQuestionIndex(question, answer);
    state.currentIndex = nextIndex;
    if (state.currentIndex >= allQuestions.length) {
      await finishSurvey();
    } else {
      state.navigationStack.push(state.currentIndex);
      await renderCurrentQuestion();
    }
  } catch (error) {
    alert(`保存本题失败：${error.message}`);
  } finally {
    els.nextBtn.disabled = false;
    updatePreviousButton();
    updateCameraControlUi();
    els.nextBtn.textContent = "下一题";
  }
}

async function handlePreviousQuestion() {
  if (state.navigationStack.length <= 1) return;

  els.prevBtn.disabled = true;
  els.nextBtn.disabled = true;
  els.prevBtn.textContent = "正在返回...";
  try {
    await discardAllRecordings();
    discardPendingRecordingForQuestion(allQuestions[state.currentIndex]);
    state.navigationStack.pop();
    state.currentIndex = state.navigationStack[state.navigationStack.length - 1];
    const previousQuestion = allQuestions[state.currentIndex];
    state.rerecordingCounts[previousQuestion.id] = (state.rerecordingCounts[previousQuestion.id] || 0) + 1;
    await saveSessionSnapshot();
    await renderCurrentQuestion();
  } catch (error) {
    alert(`返回上一题失败：${error.message}`);
  } finally {
    els.prevBtn.textContent = "上一题";
    els.nextBtn.disabled = false;
    updatePreviousButton();
    updateCameraControlUi();
  }
}

function getNextQuestionIndex(question, answer) {
  const selectedValues = Array.isArray(answer.value) ? answer.value.map(String) : [String(answer.value)];
  const selectedOption = question.options.find((option) => selectedValues.includes(String(option.value)) && option.nextId);
  const nextId = selectedOption?.nextId || question.defaultNextId;
  if (!nextId) return state.currentIndex + 1;
  const nextIndex = allQuestions.findIndex((item) => item.id === nextId);
  return nextIndex >= 0 ? nextIndex : state.currentIndex + 1;
}

function readAnswer(question) {
  if (question.type === "single" || question.type === "scale") {
    const checked = els.answerHost.querySelector("input[name='answer']:checked");
    if (!checked) return { valid: false, message: "请选择一个答案后继续。" };
    return {
      valid: true,
      value: checked.value,
      label: checked.dataset.label || checked.value
    };
  }

  if (question.type === "multi") {
    const checkedItems = [...els.answerHost.querySelectorAll("input[name='answer']:checked")];
    if (!checkedItems.length) return { valid: false, message: "请至少选择一个答案后继续。" };
    const exclusiveValues = question.exclusiveValues || [];
    const selectedExclusive = checkedItems.find((item) => exclusiveValues.includes(item.value));
    if (selectedExclusive && checkedItems.length > 1) {
      return { valid: false, message: `如果选择“${selectedExclusive.dataset.label || selectedExclusive.value}”，请不要同时选择其他选项。` };
    }
    const otherInput = els.answerHost.querySelector("#otherTextInput");
    const labels = checkedItems.map((item) => item.dataset.label || item.value);
    const values = checkedItems.map((item) => item.value);
    const selectedNeedsText = checkedItems.some((item) => {
      const option = question.options.find((entry) => entry.value === item.value);
      return option && option.needsText;
    });
    if (selectedNeedsText) {
      const otherText = String(otherInput?.value || "").trim();
      if (!otherText) return { valid: false, message: "选择“其他”时，请填写具体说明。" };
      labels.push(`其他说明：${otherText}`);
      values.push(`其他说明：${otherText}`);
    }
    return {
      valid: true,
      value: values,
      label: labels.join("；")
    };
  }

  if (question.type === "matrix") {
    const values = {};
    const labels = {};
    for (const row of question.rows) {
      const checked = els.answerHost.querySelector(`input[name='answer_${cssEscape(row.key)}']:checked`);
      if (!checked) return { valid: false, message: `请完成 ${row.key} 项后继续。` };
      values[row.key] = checked.value;
      labels[row.key] = checked.dataset.label || checked.value;
    }
    return {
      valid: true,
      value: values,
      label: labels
    };
  }

  const input = els.answerHost.querySelector("#answerInput");
  const value = String(input.value || "").trim();
  if (!value) return { valid: false, message: "请填写当前题目后继续。" };
  if (question.inputType === "number") {
    const numberValue = Number(value);
    if (Number.isNaN(numberValue)) return { valid: false, message: "请输入有效数字。" };
    if (typeof question.min !== "undefined" && numberValue < question.min) return { valid: false, message: `数值不能小于 ${question.min}。` };
    if (typeof question.max !== "undefined" && numberValue > question.max) return { valid: false, message: `数值不能大于 ${question.max}。` };
    return { valid: true, value: numberValue, label: String(numberValue) };
  }

  return { valid: true, value, label: value };
}

async function startAllRecordings(question) {
  if (!canRecordAnyVideo()) {
    throw new Error("当前环境无法录制视频。");
  }

  if (hasActiveRecording()) {
    await stopAllRecordings(question);
  }

  state.recordingStartedAt = performance.now();
  state.recordingStartedAtEpoch = Date.now();
  startTimer();
  const tasks = [];
  if (canRecordVideo()) tasks.push(startRecording(question).catch((error) => {
    state.compatibility.cameraRecordingError = error.message;
    return null;
  }));
  if (canRecordScreen()) tasks.push(startScreenRecording(question).catch((error) => {
    state.compatibility.screenRecordingError = error.message;
    return null;
  }));
  await Promise.all(tasks);
  setRecordingState(hasActiveRecording(), question.id);
}

async function startFaceRecordingForCurrentQuestion(question) {
  if (!canRecordVideo()) {
    throw new Error("当前环境无法录制摄像头视频。");
  }
  if (hasActiveFaceRecording()) {
    await stopFaceRecordingForCurrentQuestion(question);
  }
  state.recordingStartedAt = performance.now();
  state.recordingStartedAtEpoch = Date.now();
  startTimer();
  await startRecording(question);
  setRecordingState(true, question.id);
  updateCameraControlUi();
}

async function stopFaceRecordingForCurrentQuestion(question) {
  const startedAtEpoch = state.recordingStartedAtEpoch || Date.now();
  const faceVideo = await stopRecording(question).catch(() => null);
  const endedAtEpoch = Date.now();
  return {
    faceVideo,
    screenVideo: null,
    durationMs: faceVideo?.durationMs || Math.max(0, endedAtEpoch - startedAtEpoch),
    startedAtEpoch,
    endedAtEpoch
  };
}

function stopAllRecordings(question) {
  const startedAtEpoch = state.recordingStartedAtEpoch || Date.now();
  return Promise.all([
    stopRecording(question).catch(() => null),
    stopScreenRecording(question).catch(() => null)
  ]).then(([faceVideo, screenVideo]) => {
    const endedAtEpoch = Date.now();
    stopTimer();
    setRecordingState(false);
    return {
      faceVideo,
      screenVideo,
      durationMs: Math.max(faceVideo?.durationMs || 0, screenVideo?.durationMs || 0) || null,
      startedAtEpoch,
      endedAtEpoch
    };
  });
}

function discardAllRecordings() {
  return Promise.all([
    discardCurrentRecording(),
    discardScreenRecording()
  ]).then(() => {
    stopTimer();
    setRecordingState(false);
  });
}

function appendTimelineEntry(question, recordings, extra = {}) {
  const startEpoch = extra.startedAtEpoch || recordings.startedAtEpoch || state.recordingStartedAtEpoch || state.questionStartedAtEpoch || Date.now();
  const endEpoch = extra.endedAtEpoch || recordings.endedAtEpoch || Date.now();
  const faceVideo = recordings.faceVideo || null;
  const screenVideo = recordings.screenVideo || null;
  const recordingAttempt = faceVideo?.recordingAttempt ?? screenVideo?.recordingAttempt ?? getCurrentRecordingAttempt(question);
  const entry = {
    segmentId: `${question.id}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    itemType: extra.itemType || "question",
    questionId: question.id,
    sectionId: question.sectionId || "",
    sectionTitle: question.sectionTitle,
    questionText: question.text,
    recordingAttempt,
    isRerecording: recordingAttempt > 0,
    startedAt: new Date(startEpoch).toISOString(),
    endedAt: new Date(endEpoch).toISOString(),
    relativeStartMs: relativeMsFromReference(startEpoch),
    relativeEndMs: relativeMsFromReference(endEpoch),
    durationMs: Math.max(recordings.durationMs || 0, endEpoch - startEpoch),
    answerValue: extra.answerValue,
    answerLabel: extra.answerLabel,
    faceVideoFileName: faceVideo ? faceVideo.fileName : null,
    screenVideoFileName: screenVideo ? screenVideo.fileName : null
  };
  state.timeline.push(entry);
  return entry;
}

function relativeMsFromReference(epochMs) {
  if (!state.screenRecordingReferenceEpoch) return null;
  return Math.max(0, epochMs - state.screenRecordingReferenceEpoch);
}

async function startRecording(question) {
  if (!state.stream || !("MediaRecorder" in window)) {
    throw new Error("当前环境无法录制视频。");
  }

  if (state.recorder && state.recorder.state !== "inactive") {
    await stopRecording(question);
  }

  state.chunks = [];
  const options = state.selectedMimeType ? { mimeType: state.selectedMimeType } : undefined;
  state.recorder = new MediaRecorder(state.stream, options);
  state.recorder.ondataavailable = (event) => {
    if (event.data && event.data.size > 0) state.chunks.push(event.data);
  };
  state.activeRecording = {
    questionId: question.id,
    recordingAttempt: getCurrentRecordingAttempt(question)
  };
  state.recorder.start(1000);
  setRecordingState(true, question.id);
}

async function startScreenRecording(question) {
  if (!state.screenStream || !state.screenStream.getVideoTracks().some((track) => track.readyState === "live") || !("MediaRecorder" in window)) {
    throw new Error("当前环境无法录制屏幕。");
  }

  if (state.screenRecorder && state.screenRecorder.state !== "inactive") {
    await stopScreenRecording(question);
  }

  state.screenChunks = [];
  const options = state.selectedMimeType ? { mimeType: state.selectedMimeType } : undefined;
  state.screenRecorder = new MediaRecorder(state.screenStream, options);
  state.screenRecorder.ondataavailable = (event) => {
    if (event.data && event.data.size > 0) state.screenChunks.push(event.data);
  };
  state.activeScreenRecording = {
    questionId: question.id,
    recordingAttempt: getCurrentRecordingAttempt(question)
  };
  state.screenRecorder.start(1000);
}

function stopRecording(question) {
  return new Promise((resolve, reject) => {
    if (!state.recorder || state.recorder.state === "inactive") {
      resolve(null);
      return;
    }

    const recorder = state.recorder;
    const startedAt = state.recordingStartedAt;
    const recordingAttempt = getCurrentRecordingAttempt(question);
    recorder.onstop = async () => {
      try {
        stopTimer();
        setRecordingState(false);
        const mimeType = recorder.mimeType || state.selectedMimeType || "video/webm";
        const blob = new Blob(state.chunks, { type: mimeType });
        const extension = mimeType.includes("mp4") ? "mp4" : "webm";
        const suffix = recordingAttempt > 0 ? `_rerecording(${recordingAttempt})` : "";
        const fileName = `videos/face/${question.id}_${slugify(question.sectionTitle)}_${slugify(question.text).slice(0, 28)}${suffix}.${extension}`;
        const video = {
          captureType: "face",
          questionId: question.id,
          cameraFacingMode: state.cameraFacingMode,
          recordingAttempt,
          isRerecording: recordingAttempt > 0,
          fileName,
          mimeType,
          size: blob.size,
          durationMs: Math.round(performance.now() - startedAt),
          blob
        };
        state.videos.push(video);
        els.videoCount.textContent = String(state.videos.length);
        if (state.db) await putStoreValue("videos", video);
        state.activeRecording = null;
        resolve(video);
      } catch (error) {
        reject(error);
      }
    };
    recorder.onerror = () => reject(recorder.error || new Error("录制器发生错误。"));
    recorder.stop();
  });
}

function stopScreenRecording(question) {
  return new Promise((resolve, reject) => {
    if (!state.screenRecorder || state.screenRecorder.state === "inactive") {
      resolve(null);
      return;
    }

    const recorder = state.screenRecorder;
    const startedAt = state.recordingStartedAt;
    const recordingAttempt = getCurrentRecordingAttempt(question);
    recorder.onstop = async () => {
      try {
        const mimeType = recorder.mimeType || state.selectedMimeType || "video/webm";
        const blob = new Blob(state.screenChunks, { type: mimeType });
        const extension = mimeType.includes("mp4") ? "mp4" : "webm";
        const suffix = recordingAttempt > 0 ? `_rerecording(${recordingAttempt})` : "";
        const fileName = `videos/screen/${question.id}_${slugify(question.sectionTitle)}_${slugify(question.text).slice(0, 28)}${suffix}.${extension}`;
        const video = {
          captureType: "screen",
          questionId: question.id,
          recordingAttempt,
          isRerecording: recordingAttempt > 0,
          fileName,
          mimeType,
          size: blob.size,
          durationMs: Math.round(performance.now() - startedAt),
          blob
        };
        state.videos.push(video);
        els.videoCount.textContent = String(state.videos.length);
        if (state.db) await putStoreValue("videos", video);
        state.activeScreenRecording = null;
        resolve(video);
      } catch (error) {
        reject(error);
      }
    };
    recorder.onerror = () => reject(recorder.error || new Error("屏幕录制器发生错误。"));
    recorder.stop();
  });
}

function getCurrentRecordingAttempt(question) {
  if (state.activeRecording && state.activeRecording.questionId === question.id) {
    return state.activeRecording.recordingAttempt || 0;
  }
  if (state.activeScreenRecording && state.activeScreenRecording.questionId === question.id) {
    return state.activeScreenRecording.recordingAttempt || 0;
  }
  return state.rerecordingCounts[question.id] || 0;
}

function hasActiveRecording() {
  return Boolean(
    (state.recorder && state.recorder.state !== "inactive") ||
    (state.screenRecorder && state.screenRecorder.state !== "inactive")
  );
}

function hasActiveFaceRecording() {
  return Boolean(state.recorder && state.recorder.state !== "inactive");
}

function hasLiveCameraStream() {
  return Boolean(state.stream && state.stream.getVideoTracks().some((track) => track.readyState === "live"));
}

function discardCurrentRecording() {
  return new Promise((resolve) => {
    if (!state.recorder || state.recorder.state === "inactive") {
      stopTimer();
      setRecordingState(false);
      state.chunks = [];
      state.activeRecording = null;
      resolve();
      return;
    }

    const recorder = state.recorder;
    recorder.ondataavailable = null;
    recorder.onerror = null;
    recorder.onstop = () => {
      stopTimer();
      setRecordingState(false);
      state.chunks = [];
      state.activeRecording = null;
      resolve();
    };
    recorder.stop();
  });
}

function discardScreenRecording() {
  return new Promise((resolve) => {
    if (!state.screenRecorder || state.screenRecorder.state === "inactive") {
      state.screenChunks = [];
      state.activeScreenRecording = null;
      resolve();
      return;
    }

    const recorder = state.screenRecorder;
    recorder.ondataavailable = null;
    recorder.onerror = null;
    recorder.onstop = () => {
      state.screenChunks = [];
      state.activeScreenRecording = null;
      resolve();
    };
    recorder.stop();
  });
}

async function finishSurvey() {
  showScreen("finish");
  state.cameraRecordingEnabled = false;
  stopTimer();
  setRecordingState(false);
  stopCamera();
  stopScreenCapture();
  els.stepLabel.textContent = "完成";
  els.screenTitle.textContent = "问卷完成";
  els.currentQuestionLabel.textContent = "已完成";
  els.questionTimer.textContent = "00:00";
  updateProgress(100);
  updateCameraControlUi();
  els.finishSummary.textContent = "问卷已完成，请导出本次评估资料。";
  await saveSessionSnapshot();
}

async function exportZip() {
  els.exportBtn.disabled = true;
  els.exportStatus.textContent = "正在整理评估资料...";
  try {
    const files = await buildExportFiles();
    const zipBlob = await createZip(files);
    const fileName = buildExportFileName();
    await saveBlob(zipBlob, fileName);
    els.exportStatus.textContent = "评估资料已准备完成。";
  } catch (error) {
    els.exportStatus.textContent = `导出失败：${error.message}`;
    alert(`导出失败：${error.message}`);
  } finally {
    els.exportBtn.disabled = false;
  }
}

async function buildExportFiles() {
  const finalAnswers = getFinalAnswerRecords();
  const finalQuestionIds = getFinalQuestionIds();
  const timelinePayload = buildTimelinePayload(finalQuestionIds);
  const answersPayload = {
    sessionId: state.sessionId,
    exportedAt: new Date().toISOString(),
    totalQuestions: allQuestions.length,
    finalAnsweredQuestions: finalAnswers.length,
    consent: state.consentRecord,
    screenRecordingReference: timelinePayload.screenRecordingReference,
    basic_info: collectBasicInfo(),
    scores: collectScoreArrays(),
    answers: finalAnswers.map(({ durationMs, ...rest }) => ({ ...rest, durationMs })),
    answer_history: state.answers.map(({ durationMs, ...rest }) => ({ ...rest, durationMs }))
  };

  const mappingPayload = {
    sessionId: state.sessionId,
    screenRecordingReference: timelinePayload.screenRecordingReference,
    consent: state.consentRecord ? {
      questionId: CONSENT_CAPTURE.id,
      sectionTitle: CONSENT_CAPTURE.sectionTitle,
      questionText: CONSENT_CAPTURE.text,
      consented: state.consentRecord.consented,
      consentedAt: state.consentRecord.consentedAt,
      durationMs: state.consentRecord.durationMs,
      videoFileName: state.consentRecord.videoFileName,
      faceVideoFileName: state.consentRecord.faceVideoFileName,
      screenVideoFileName: state.consentRecord.screenVideoFileName
    } : null,
    items: finalAnswers.map((answer) => ({
      questionId: answer.questionId,
      sectionTitle: answer.sectionTitle,
      questionText: answer.questionText,
      answerValue: answer.answerValue,
      answerLabel: answer.answerLabel,
      recordingAttempt: answer.recordingAttempt,
      isRerecording: answer.isRerecording,
      durationMs: answer.durationMs,
      videoFileName: answer.videoFileName,
      faceVideoFileName: answer.faceVideoFileName,
      faceVideoFileNames: answer.faceVideoFileNames || (answer.faceVideoFileName ? [answer.faceVideoFileName] : []),
      screenVideoFileName: answer.screenVideoFileName,
      screenVideoFileNames: answer.screenVideoFileNames || (answer.screenVideoFileName ? [answer.screenVideoFileName] : [])
    })),
    videoFiles: state.videos.map((video) => ({
      captureType: video.captureType || "face",
      questionId: video.questionId,
      fileName: video.fileName,
      cameraFacingMode: video.cameraFacingMode || null,
      recordingAttempt: video.recordingAttempt || 0,
      isRerecording: Boolean(video.isRerecording),
      durationMs: video.durationMs,
      size: video.size,
      includedInFinalPath: finalQuestionIds.has(video.questionId)
    }))
  };

  const compatibilityPayload = {
    ...state.compatibility,
    selectedMimeType: state.selectedMimeType || "browser-default",
    screenRecordingReference: timelinePayload.screenRecordingReference,
    videoCount: state.videos.length,
    faceVideoCount: state.videos.filter((video) => (video.captureType || "face") === "face").length,
    screenVideoCount: state.videos.filter((video) => video.captureType === "screen").length,
    totalVideoBytes: state.videos.reduce((sum, video) => sum + video.size, 0)
  };

  const files = [
    { name: "answers.json", data: jsonBlob(answersPayload) },
    { name: "mapping.json", data: jsonBlob(mappingPayload) },
    { name: "question_timeline.json", data: jsonBlob(timelinePayload) },
    { name: "compatibility.json", data: jsonBlob(compatibilityPayload) }
  ];

  for (const video of state.videos) {
    files.push({ name: video.fileName, data: video.blob });
  }

  return files;
}

function buildTimelinePayload(finalQuestionIds) {
  const finalIds = finalQuestionIds || getFinalQuestionIds();
  return {
    sessionId: state.sessionId,
    exportedAt: new Date().toISOString(),
    screenRecordingReference: {
      description: "如果使用平板系统录屏，请尽量在点击“开始评估”前启动系统录屏。本字段中的 startedAt 可作为后期切分系统录屏的参考零点。",
      startedAt: state.screenRecordingReferenceEpoch ? new Date(state.screenRecordingReferenceEpoch).toISOString() : null,
      epochMs: state.screenRecordingReferenceEpoch || null
    },
    segments: state.timeline.map((entry) => ({
      ...entry,
      includedInFinalPath: entry.itemType === "consent" || finalIds.has(entry.questionId)
    }))
  };
}

function getFinalQuestionIds() {
  return new Set(state.navigationStack
    .map((index) => allQuestions[index])
    .filter(Boolean)
    .map((question) => question.id));
}

function getFinalAnswerRecords() {
  const finalQuestionIds = getFinalQuestionIds();
  return state.answers
    .filter((answer) => finalQuestionIds.has(answer.questionId))
    .filter((answer, index, answers) => {
      const laterIndex = answers.findIndex((item, itemIndex) => itemIndex > index && item.questionId === answer.questionId);
      return laterIndex === -1;
    });
}

function collectBasicInfo() {
  return getFinalAnswerRecords()
    .reduce((acc, answer) => {
      const question = allQuestions.find((item) => item.id === answer.questionId);
      if (question && question.key) acc[question.key] = answer.answerValue;
      return acc;
    }, {});
}

function collectScoreArrays() {
  return QUESTION_SECTIONS
    .filter((section) => section.answerKey)
    .reduce((acc, section) => {
      acc[section.answerKey] = getFinalAnswerRecords()
        .filter((answer) => answer.sectionId === section.id)
        .map((answer) => Number(answer.answerValue));
      return acc;
    }, {});
}

function buildExportFileName() {
  const info = collectBasicInfo();
  const identity = slugify(info.respondent_identifier || info.occupation || "participant");
  const age = slugify(info.age || "age");
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `${date}_${identity}_${age}_${state.sessionId}.zip`;
}

async function saveBlob(blob, fileName) {
  if ("showSaveFilePicker" in window) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: fileName,
        types: [{ description: "ZIP 文件", accept: { "application/zip": [".zip"] } }]
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return;
    } catch (error) {
      if (error.name !== "AbortError") console.warn("File System Access API failed, using fallback.", error);
    }
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

function jsonBlob(payload) {
  return new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
}

function chooseMimeType() {
  if (!("MediaRecorder" in window) || !MediaRecorder.isTypeSupported) return "";
  const candidates = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm;codecs=h264",
    "video/webm",
    "video/mp4"
  ];
  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function canRecordVideo() {
  return Boolean(state.stream && "MediaRecorder" in window);
}

function canRecordScreen() {
  return Boolean(
    state.screenStream &&
    state.screenStream.getVideoTracks().some((track) => track.readyState === "live") &&
    "MediaRecorder" in window
  );
}

function canRecordAnyVideo() {
  return canRecordVideo() || canRecordScreen();
}

function showScreen(name) {
  els.coverScreen.classList.toggle("is-active", name === "cover");
  els.consentScreen.classList.toggle("is-active", name === "consent");
  els.questionScreen.classList.toggle("is-active", name === "question");
  els.finishScreen.classList.toggle("is-active", name === "finish");
}

function updateProgress(forcePercent) {
  const percent = typeof forcePercent === "number"
    ? forcePercent
    : Math.round((state.currentIndex / allQuestions.length) * 100);
  els.progressFill.style.width = `${percent}%`;
  els.progressText.textContent = `${percent}%`;
}

function setRecordingState(isRecording, questionId = "") {
  els.recordingPill.classList.toggle("is-recording", isRecording);
  els.recordingPill.textContent = "";
}

function startTimer() {
  stopTimer();
  els.questionTimer.textContent = "00:00";
  state.timerId = window.setInterval(() => {
    const elapsed = Math.round((performance.now() - state.recordingStartedAt) / 1000);
    els.questionTimer.textContent = formatDuration(elapsed);
  }, 500);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function stopCamera() {
  if (!state.stream) return;
  state.stream.getTracks().forEach((track) => track.stop());
  state.stream = null;
  els.cameraPreview.srcObject = null;
  els.cameraPlaceholder.classList.remove("is-hidden");
}

function stopScreenCapture() {
  if (!state.screenStream) return;
  state.screenStream.getTracks().forEach((track) => track.stop());
  state.screenStream = null;
}

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function createSessionId() {
  const random = Math.random().toString(36).slice(2, 7);
  return `${Date.now().toString(36)}${random}`;
}

function slugify(value) {
  return String(value)
    .trim()
    .replace(/[\\/:*?"<>|#%&{}$!'@+=`]/g, "")
    .replace(/\s+/g, "_")
    .slice(0, 48) || "item";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(String(value));
  }
  return String(value).replace(/["\\]/g, "\\$&");
}

function openCaptureDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is not supported."));
      return;
    }
    const request = indexedDB.open("tablet-survey-capture", 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("videos")) db.createObjectStore("videos", { keyPath: "fileName" });
      if (!db.objectStoreNames.contains("answers")) db.createObjectStore("answers", { keyPath: "questionId" });
      if (!db.objectStoreNames.contains("sessions")) db.createObjectStore("sessions", { keyPath: "sessionId" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function putStoreValue(storeName, value) {
  return new Promise((resolve, reject) => {
    if (!state.db) {
      resolve();
      return;
    }
    const tx = state.db.transaction(storeName, "readwrite");
    tx.objectStore(storeName).put(value);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function saveSessionSnapshot() {
  return putStoreValue("sessions", {
    sessionId: state.sessionId,
    updatedAt: new Date().toISOString(),
    currentIndex: state.currentIndex,
    answerCount: state.answers.length,
    videoCount: state.videos.length,
    timelineCount: state.timeline.length,
    screenRecordingReferenceEpoch: state.screenRecordingReferenceEpoch,
    cameraRecordingEnabled: state.cameraRecordingEnabled,
    pendingQuestionRecordingCount: Object.keys(state.pendingQuestionRecordings).length,
    cameraFacingMode: state.cameraFacingMode,
    faceVideoCount: state.videos.filter((video) => (video.captureType || "face") === "face").length,
    screenVideoCount: state.videos.filter((video) => video.captureType === "screen").length,
    consentRecord: state.consentRecord,
    compatibility: state.compatibility
  });
}

async function createZip(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const file of files) {
    const nameBytes = encoder.encode(file.name);
    const dataBuffer = await file.data.arrayBuffer();
    const data = new Uint8Array(dataBuffer);
    const crc = crc32(data);
    const localHeader = createLocalFileHeader(nameBytes, data.length, crc);
    localParts.push(localHeader, data);
    centralParts.push(createCentralDirectoryHeader(nameBytes, data.length, crc, offset));
    offset += localHeader.length + data.length;
  }

  const centralDirectorySize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const endRecord = createEndOfCentralDirectory(files.length, centralDirectorySize, offset);
  return new Blob([...localParts, ...centralParts, endRecord], { type: "application/zip" });
}

function createLocalFileHeader(nameBytes, size, crc) {
  const header = new Uint8Array(30 + nameBytes.length);
  const view = new DataView(header.buffer);
  view.setUint32(0, 0x04034b50, true);
  view.setUint16(4, 20, true);
  view.setUint16(6, 0x0800, true);
  view.setUint16(8, 0, true);
  view.setUint16(10, 0, true);
  view.setUint16(12, 0, true);
  view.setUint32(14, crc, true);
  view.setUint32(18, size, true);
  view.setUint32(22, size, true);
  view.setUint16(26, nameBytes.length, true);
  view.setUint16(28, 0, true);
  header.set(nameBytes, 30);
  return header;
}

function createCentralDirectoryHeader(nameBytes, size, crc, offset) {
  const header = new Uint8Array(46 + nameBytes.length);
  const view = new DataView(header.buffer);
  view.setUint32(0, 0x02014b50, true);
  view.setUint16(4, 20, true);
  view.setUint16(6, 20, true);
  view.setUint16(8, 0x0800, true);
  view.setUint16(10, 0, true);
  view.setUint16(12, 0, true);
  view.setUint16(14, 0, true);
  view.setUint32(16, crc, true);
  view.setUint32(20, size, true);
  view.setUint32(24, size, true);
  view.setUint16(28, nameBytes.length, true);
  view.setUint16(30, 0, true);
  view.setUint16(32, 0, true);
  view.setUint16(34, 0, true);
  view.setUint16(36, 0, true);
  view.setUint32(38, 0, true);
  view.setUint32(42, offset, true);
  header.set(nameBytes, 46);
  return header;
}

function createEndOfCentralDirectory(fileCount, centralDirectorySize, centralDirectoryOffset) {
  const header = new Uint8Array(22);
  const view = new DataView(header.buffer);
  view.setUint32(0, 0x06054b50, true);
  view.setUint16(4, 0, true);
  view.setUint16(6, 0, true);
  view.setUint16(8, fileCount, true);
  view.setUint16(10, fileCount, true);
  view.setUint32(12, centralDirectorySize, true);
  view.setUint32(16, centralDirectoryOffset, true);
  view.setUint16(20, 0, true);
  return header;
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i += 1) {
    let c = i;
    for (let k = 0; k < 8; k += 1) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32(data) {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i += 1) {
    crc = CRC_TABLE[(crc ^ data[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}
