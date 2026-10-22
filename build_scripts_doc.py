from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.section import WD_SECTION
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

OUT = r"D:\codx任务\留学申请脚本合集.docx"

scripts = [
    ("01 硬核直说型", "申请留学最危险的，不是你现在开始得晚，而是你还在等一个‘准备好了再开始’的时刻。语言没开始学，因为想先选好学校；学校没选，因为想先看看自己能考多少分；材料没整理，因为觉得离截止日还早。结果就是，所有事情在申请季最后两个月一起爆发。到那时你不是不能申请，而是只能申请还来得及的项目。留学规划的意义，不是把人生安排得滴水不漏，而是让你一直保有选择权。今晚别刷更多经验帖，打开目标学校官网，查清截止日期，再倒推你这周唯一要完成的任务。", "近景直视镜头；“一起爆发”时切日历和待办堆积画面。"),
    ("02 清单干货型", "很多同学问我，准备留学到底该从哪里开始？答案不是先找中介，也不是先背单词，而是先做一次完整盘点。第一，确认你想去哪些国家和专业；第二，查这些项目的申请轮次和截止日期；第三，看自己的成绩、语言、实习和材料分别差多少；第四，把差距拆成这个月、这学期、申请季前的任务。你会发现，焦虑不是因为任务太多，而是因为任务没有顺序。没有时间表的时候，语言、选校、文书、实习全都像急事；有了时间表，你只需要做眼前最重要的一件。今天先用二十分钟写下这四项。", "俯拍平板或纸张，四项内容逐项出现并打钩。"),
    ("03 对比反差型", "同样准备明年留学，有人现在已经在对比项目要求，有人还在说‘反正我大三才申请’。差别不一定是背景，也不一定是谁更聪明，而是谁更早把目标变成了计划。第一个同学知道自己的语言考试在什么时候、材料缺什么、每个月要推进什么；第二个同学只知道自己想出国。想法和计划之间，隔着一张时间表。申请不是比赛谁最早焦虑，而是比赛谁能更早发现问题、更从容地调整。你现在不需要做完整人生规划，只要写下三个日期：语言考试、项目截止、材料准备。把模糊的‘以后’变成具体的日期。", "左右分屏，一边刷手机说“还早”，一边整理时间线。"),
    ("04 温和风险提醒型", "我不想用焦虑逼你申请，但有件事必须说清楚：申请季不会因为你还没准备好就停下来。语言成绩没出来，文书没开始，推荐人还没联系，这些都不是小问题；它们真正麻烦的地方，是会互相挤压你的时间。你临近截止日才发现材料缺一项，能补，但你可能没有时间认真选校，也没有余地修改文书。提前规划不是为了让你每天都很紧绷，而是为了遇到变化时，手里还有备选方案。你今天不用把所有事情做完。只要做一件事：列出你最想申请的三所学校，确认它们的截止日期和语言要求。", "语气平稳，结尾展示“三校截止日期”表格。"),
    ("05 故事场景型", "有一种场景特别常见：刚开始准备留学时，大家都觉得时间很多。九月说先看看学校，十月说等语言报名，十一月开始担心成绩，十二月突然发现文书、推荐信、材料还都没动。不是这个人不努力，而是每一步都没有具体截止日期，于是最重要的事总会被作业、考试和日常安排挤到后面。留学申请不是一件大事突然完成，而是一堆小事按顺序完成。你可以从现在开始给每件事一个位置：本周查项目，本月定考试，下个月盘点材料。别等焦虑把你推着走，提前一步，你就多一分从容。", "月份翻页、待办持续累积，最后切换清晰时间线。"),
    ("06 提问互动型", "你准备留学最害怕哪一步？是语言分数不够、文书不会写，还是担心自己背景普通？这些担心都很真实，但我更建议你先问一个问题：我现在最缺的，到底是什么？如果语言还没达到要求，就先把考试计划排出来；如果学校目标不清楚，就先研究项目；如果材料不足，就明确还可以补什么。最怕的不是短板，而是不知道短板在哪里，于是什么都想做，最后什么都没推进。留学申请不需要你一开始就很厉害，但需要你足够诚实地面对自己的现状。评论区告诉我，你卡在哪一步？先把问题说清楚，才能开始解决。", "开场手指镜头提问；中段用三张卡片呈现三类问题。"),
    ("07 反常识型", "留学申请不是准备得越早、做得越多就越好，关键是顺序对不对。目标国家和专业没想清楚，就先别急着写一份通用文书；项目截止日期没查清，就别盲目报名考试；自己的成绩和经历没盘点，就别因为别人拿到 offer 而疯狂加项目。很多同学看起来很努力，实际上是在做低优先级的事情，忙了一圈，最关键的节点还是没推进。理性规划不是把日程表排得满满的，而是知道哪件事不做，后面的选择就会受影响。今天你可以做一个简单练习：把所有留学任务写下来，只圈出会影响截止日期的前三项，先做它们。", "满屏待办逐渐淡出，只留下三个高优先级任务。"),
    ("08 倒计时型", "如果你计划明年申请，现在最值钱的不是焦虑，而是倒计时。离你最早一场语言考试还有多少天？离第一所目标学校截止还有多少天？从今天到那一天，中间还要留出复习、重考、整理材料、修改文书的时间。很多人不是能力不够，而是把所有事情都压在最后一个时间段，最后只能用仓促换结果。你不需要每天都做很多，但必须知道时间正在往哪里走。打开手机日历，标出三个关键日期：最早截止日、第一次语言考试、材料完成日。只要时间线出现，下一步就会变得清楚。", "倒计时数字快速切换，随后落到三个日历标记上。"),
    ("09 朋友提醒型", "如果你是正在准备申请的大学生，我想用朋友的方式提醒你：别把留学当成一个遥远的未来事件。它会直接影响你现在怎么安排成绩、语言、实习、课程和时间。你越晚开始盘点，越容易发现所有事情都撞在一起；你越早知道自己差什么，就越有机会慢慢补。提前准备不等于提前焦虑，更不等于把大学生活全交给申请。它只是让你在学习、实习和申请之间，提前留出空间。你今天不用做特别大的决定，先回答一个问题：你申请时最希望自己拥有什么优势？然后倒推，这个优势现在该从哪一步开始积累。", "坐姿自然，像和朋友聊天；结尾展示“目标优势到本周行动”。"),
    ("10 误区拆解型", "留学申请里有一个很常见的误区：很多人觉得，等自己足够优秀了，才有资格开始准备。于是成绩想再高一点，语言想再好一点，实习想再多一点，最后却一直没有真正研究过项目要求。其实申请规划不是给完美的人准备的，它恰恰是帮你判断现状、发现短板、安排补救时间的工具。先看项目要什么，再看自己有什么，最后决定哪些值得补、哪些不必浪费时间。别把别人的履历当成你的待办清单。你最该做的，是完成一次真实盘点：成绩、语言、经历、预算和目标学校，分别写下现状与下一步。", "先放“等我更优秀”的文字，再切“项目要求、个人现状、行动计划”三栏。"),
    ("11 未来视角型", "想象一下，半年后的你回头看今天，最感谢自己做了什么？大概率不是熬夜一晚写完文书，也不是突然背完很多单词，而是早点开始，把申请拆成了一步一步。这个月确定方向，下个月完成语言规划，再往后整理材料、联系推荐人、修改文书。真正让人安心的，从来不是‘我已经准备得很完美’，而是‘我知道下一步该做什么’。留学申请不需要你每天情绪高涨，只需要你每周都没有失联。今天就把这周的第一项任务定下来，哪怕只是查清一个项目的条件，也是在为半年后的自己留出选择。", "开场望向远处，随后切换周计划和完成勾选。"),
    ("12 直击拖延型", "很多人不是不知道该准备留学，而是因为事情太多，不知道先做哪一件，于是就开始拖延。先看攻略、再问朋友、收藏一堆帖子，忙了很久，却没有一个实际进度。解决办法不是逼自己更自律，而是把任务缩小到马上能做。不要写‘准备留学’，这不是任务；写‘今晚查三所学校的申请截止日期’，这才是任务。不要写‘提高语言’，写‘周末完成一次模考并确定报名时间’。任务越具体，越容易开始；开始之后，焦虑才会下降。现在拿出备忘录，把你最大的留学任务改写成一件半小时内能完成的小事。", "十条模糊待办划掉，替换成一个可执行任务。"),
    ("13 类比记忆型", "申请留学很像赶飞机。你不会在起飞前半小时才决定要不要出门，而是会先看航班时间、准备证件、留出路上堵车和安检的时间。语言成绩、选校、文书、推荐信也是一样。提前规划不是因为你一定会遇到问题，而是因为问题出现时，你还有时间调整。比如语言没达到预期，你还有机会重考；某个项目要求变化，你还能换方案；材料来不及，你不会马上失去全部选择。最可怕的不是计划变化，而是没有任何缓冲。今天就给你的申请留出缓冲期：把最早截止日往前推一个月，看看那之前必须完成什么。", "行李、机场、登机牌素材与申请时间线交叉剪辑。"),
    ("14 选择权型", "很多人问，为什么一定要早点规划留学？因为规划真正带来的，不是保证你一定录取，而是更多选择权。语言准备得早，你能申请的学校更多；材料整理得早，你可以认真比较项目，不是只挑还没截止的；预算提前想清楚，你也不会在最后一刻因为费用放弃目标。拖延不会让选择变简单，只会让选择越来越少。我们不需要把未来控制得一清二楚，但至少要让自己有调整的余地。今天别先问哪所学校最好，先问自己：如果下个月必须提交申请，我手里还缺什么？把答案写出来，就是规划的开始。", "多条道路逐渐收窄，再回到多个学校选项并列的画面。"),
    ("15 行动号召型", "别再反复问‘我现在开始还来得及吗’。这个问题问十次，也不会让申请自动推进。你真正该问的是：今天我能完成什么？可以是打开学校官网，确认申请轮次；可以是查一次语言考试日期；可以是把成绩单、获奖和经历整理到一个文件夹。留学申请没有神奇捷径，也没有一个完美的启动时机。你越想一次性把所有问题解决，越容易什么都不做；你越愿意从一个具体动作开始，越容易走到后面。现在就选一个最小任务，设定三十分钟，做完它。不要等待不焦虑的时候再开始，行动本身会让你更不焦虑。", "连续三个“打开”动作快速切镜；结尾停留在已完成的一项待办上。"),
]

def set_font(run, size=11, bold=False, color=None):
    run.font.name = "Microsoft YaHei"
    run._element.rPr.rFonts.set(qn("w:eastAsia"), "Microsoft YaHei")
    run._element.rPr.rFonts.set(qn("w:ascii"), "Aptos")
    run.font.size = Pt(size)
    run.bold = bold
    if color:
        run.font.color.rgb = RGBColor(*color)

def set_cell_shading(cell, fill):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), fill)
    tcPr.append(shd)

def set_cell_border(cell, color="D9D9D9"):
    tcPr = cell._tc.get_or_add_tcPr()
    borders = tcPr.first_child_found_in("w:tcBorders")
    if borders is None:
        borders = OxmlElement("w:tcBorders")
        tcPr.append(borders)
    for edge in ("top", "left", "bottom", "right"):
        tag = qn(f"w:{edge}")
        elem = borders.find(tag)
        if elem is None:
            elem = OxmlElement(f"w:{edge}")
            borders.append(elem)
        elem.set(qn("w:val"), "single")
        elem.set(qn("w:sz"), "6")
        elem.set(qn("w:color"), color)

doc = Document()
section = doc.sections[0]
section.top_margin = Cm(2.3)
section.bottom_margin = Cm(2.3)
section.left_margin = Cm(2.4)
section.right_margin = Cm(2.4)

normal = doc.styles["Normal"]
normal.font.name = "Microsoft YaHei"
normal._element.rPr.rFonts.set(qn("w:eastAsia"), "Microsoft YaHei")
normal.font.size = Pt(11)
normal.paragraph_format.space_after = Pt(7)
normal.paragraph_format.line_spacing = 1.45

title = doc.add_paragraph(style="Title")
title.alignment = WD_ALIGN_PARAGRAPH.CENTER
title.paragraph_format.space_before = Pt(120)
title.paragraph_format.space_after = Pt(18)
set_font(title.add_run("留学申请脚本合集"), 24, True, (0, 0, 0))

sub = doc.add_paragraph()
sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
sub.paragraph_format.space_after = Pt(34)
set_font(sub.add_run("15 条约 1 分钟口播脚本"), 13, False, (0, 0, 0))

intro = doc.add_paragraph()
intro.paragraph_format.space_before = Pt(28)
intro.paragraph_format.line_spacing = 1.5
set_font(intro.add_run("适用人设：留学博主，面向准备申请的大学生。表达真诚直接，适度提示申请风险，最终落点是理性规划与明确行动。"), 11)

doc.add_page_break()

for i, (heading, script, shot) in enumerate(scripts):
    h = doc.add_paragraph(style="Heading 1")
    h.paragraph_format.space_before = Pt(16 if i else 0)
    h.paragraph_format.space_after = Pt(8)
    set_font(h.add_run(heading), 16, True, (0, 0, 0))

    label = doc.add_paragraph()
    label.paragraph_format.space_after = Pt(4)
    set_font(label.add_run("逐字稿"), 10, True, (31, 78, 121))

    body = doc.add_paragraph()
    body.paragraph_format.first_line_indent = Cm(0.74)
    body.paragraph_format.line_spacing = 1.5
    body.paragraph_format.space_after = Pt(8)
    set_font(body.add_run(script), 11)

    table = doc.add_table(rows=1, cols=2)
    table.autofit = False
    table.columns[0].width = Cm(2.2)
    table.columns[1].width = Cm(13.0)
    left, right = table.rows[0].cells
    left.width = Cm(2.2)
    right.width = Cm(13.0)
    set_cell_shading(left, "EAF2F8")
    for cell in (left, right):
        set_cell_border(cell)
        cell.vertical_alignment = 1
    lp = left.paragraphs[0]
    lp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_font(lp.add_run("拍摄提示"), 10, True, (0, 0, 0))
    rp = right.paragraphs[0]
    rp.paragraph_format.space_after = Pt(0)
    set_font(rp.add_run(shot), 10)

    if i in (4, 9):
        doc.add_page_break()

doc.save(OUT)
print(OUT)
