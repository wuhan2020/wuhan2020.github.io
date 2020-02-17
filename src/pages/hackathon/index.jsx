import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Steps, Button, message } from "antd";
import { Layout } from "antd";
import { Row, Col } from "antd";
import { Typography} from "antd";


const { Title, Paragraph, Text } = Typography;

const { Header, Footer, Content } = Layout;

const { Step } = Steps;

const steps = [
  {
    title: "注册",
    content:
      "通过百格活动页面，用户提供邮箱、组织、手机号、个人基本信息、参与赛道偏好等（需详细设计），参与比赛活动报名。"
  },
  {
    title: "组队",
    content:
      "在主题演讲、动员活动结束后，加入相关赛道 slack 频道参与自由讨论和自由组队。"
  },
  {
    title: "比赛阶段",
    content: "讨论与答疑：Slack 频道 & RunTheWorld虚拟房间 & 微信群。"
  },
  {
    title: "提交作品",
    content: "参赛者提交参赛作品。"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Layout>
          <Header>Header</Header>
          <Content>
            <div>
              <Row justify="space-around" align="middle">
                <Col>
                  <Typography>
                    <Paragraph>
                    谁也不会预计到，新冠肺炎病毒的影响如此巨大，目前它已经发展为全球性紧急事件。虽然形势不容乐观，但我们也看到很多暖心的一幕幕在上演：众多志愿者的无私奉献，大量物资用品的捐赠，火神山、雷神山医院的火速建成，多地医疗队伍的驰援，都让这个冬天变的不那么寒冷。
                    </Paragraph>
                    <Paragraph>
                    而在全国对抗疫情的背后，技术支持也占据了重要的一环。民政部司长陈越良就曾公开喊话，呼吁互联网企业开发公益应用，并说到“开发一个有用的公益软件，比捐款十个亿还管用。”
                    </Paragraph>
                    <Paragraph>
                    怎么样让更多人参与其中，让信息科技等力量发挥更大的作用？
                    </Paragraph>
                  </Typography>
                  <Title align="middle">Hack for Wuhan 黑客马拉松等你来战</Title>
                  <Typography>
                    <Paragraph>
                    作为Wuhan2020社区的志愿者和开发人员，我们将发起另一场活动：在 2020年2月底，启动Hack for Wuhan黑客马拉松，在此诚邀您利用自己的技能，为抗击疫情贡献一份力量！
                    </Paragraph>
                    <Paragraph>
                    <Text strong>我们相信黑客马拉松不仅是激发诞生独角兽的舞台，还能让我们一道肩负使命、共抗疫情。</Text>
                    </Paragraph>
                    <Paragraph>
                    我们期待这样的形式出现：新的构想设计、产品原型、业务或社会影响模型，我们深信所有的努力都将会产生深远的影响。
                    </Paragraph>
                    <Paragraph>
                    让你的灵感产生更大的价值，我们会提供专业的技术支持，你将有机会与包括来自斯坦福大学、麻省理工学院、哈佛大学、Andreessen Horowitz、金沙江创业投资、Google、Facebook、ByteDance以及硅谷、中国、印度和英国的初创公司的优秀导师团队互动。
                    </Paragraph>
                    <Paragraph>
                    全国人民共同对抗新冠肺炎疫情的种种，将会成为一段历史，而由此而迸发出的灵感，一定还会持续闪耀。活动中每一个有价值的想法都会得到重视，在帮助抗击疫情的同时，让我们为社会创作更多的共享价值。
                    </Paragraph>
                  </Typography>
                 
                  <Title level={2}>Hackathon活动介绍</Title>
                  <Typography>
                    <Paragraph>
                      以线上黑客马拉送的形式，团队做战，在两天的时间里，提出具有创造性的方案项目，帮助对抗当下的新冠肺炎疫情。
                    </Paragraph>
                    <Paragraph>
                      <Title level={3}>活动目的</Title>
                      <ul>
                        <li>
                          呼吁更多人参与、创造包括产品原型，编码，用户体验设计以及业务/社会影响模型等形式的作品，以对抗2019-nCoV。
                        </li>
                        <li>
                          鼓励社会创新，以开源协作来帮助对抗疫情，并在志愿者，机构，企业和平台之间创造共享价值。
                        </li>
                      </ul>
                    </Paragraph>
                    <Paragraph>
                      <Title level={3}>活动详情</Title>
                      <ul>
                        <li>时间：2020年2月28日至29日</li>
                        <li>方式：完全线上进行，鼓励分布式协作的方式</li>
                        <li>
                          内容：根据“武汉2020”提供的数据进行设计和开发比赛，完成作品提交以及介绍视频（idea、作品简介以及意义）。
                        </li>
                        <li>
                          奖励：评委和社区对参与者和项目进行评选排名，向优胜者颁发奖励。
                        </li>
                      </ul>
                    </Paragraph>
                    <Paragraph>
                      <Title level={3}>主题赛道</Title>
                      <ul>
                        主题围绕本次出现的全球性公共卫生危机-新型冠状病毒疫情，可选的主题包括：
                        <li>针对疫情的标注数据</li>
                        <li>技术的开发应用</li>
                        <li>科普宣传</li>
                        <li>应对本次公共危机下出现的各类社会挑战的解决方案</li>
                      </ul>
                    </Paragraph>
                    <Paragraph>
                      <Title level={3}>作品形式</Title>
                      <ul>
                        作品以比较自由的方式进行展现，面向开源作品，包括但不限于：
                        <li>视频、动画等艺术设计作品（压缩文件）</li>
                        <li>动态网页（网址）</li>
                        <li>开源数据（git仓库等）</li>
                        <li>数据的分析预测模型（git仓库、网站等）</li>
                        <li>可视化平台（网站等）</li>
                        <li>针对疫情的产品应用（git仓库、APP、网站等）</li>
                        <li>分析调查报告、策划书（文档）</li>
                      </ul>
                    </Paragraph>
                    <Paragraph>
                      <Title level={3}>参赛要求</Title>
                      <ul>
                        <Text strong>参与人员包括但不限于：</Text>
                        <li>
                          来自开源社区（例如WUHAN
                          2020和GitHub上其他社区）的开发人员，有出色的想法和原型，能解决当下的挑战并创造共享价值；
                        </li>
                        <li>希望通过开源方式来提高社会影响力的志愿者；</li>
                        <li>
                          积极应对nCoV挑战以及社会紧急危机的企业家、创业者；
                        </li>
                        <Text strong>欢迎三类观众：</Text>
                        <li>Hackathon团队；</li>
                        <li>
                          受邀人-评委，导师，专业人员（企业家，社会创新者，风险投资人等）；
                        </li>
                        <li>任何对此活动感兴趣并想要观摩学习的人。</li>
                      </ul>
                    </Paragraph>
                    <Paragraph>
                      <Title level={3}>导师及评委阵容</Title>
                      <ul>
                        <li>Eva Woo，斯坦福大学PACS；</li>
                        <li>斯坦福大学，伯克利大学或麻省理工学院的CS教授；</li>
                        <li>来自Google，Facebook，ByteDance等的产品经理；</li>
                        <li>
                          风险投资机构的嘉宾（GSR金沙江，Andreessen
                          Horowitz或Zhenfund真格）；
                        </li>
                        <li>来自美国，印度，中国等地的创业者等；</li>
                      </ul>
                    </Paragraph>
                  </Typography>
                  <Title level={2}>比赛流程</Title>
                  <Typography>
                    <Paragraph>
                      <Steps current={current}>
                        {steps.map(item => (
                          <Step key={item.title} title={item.title} />
                        ))}
                      </Steps>
                      <div className="steps-content">
                        {steps[current].content}
                      </div>
                      <div className="steps-action">
                        {current < steps.length - 1 && (
                          <Button type="primary" onClick={() => this.next()}>
                            Next
                          </Button>
                        )}
                        {current === steps.length - 1 && (
                          <Button
                            type="primary"
                            onClick={() =>
                              message.success("Processing complete!")
                            }
                          >
                            Done
                          </Button>
                        )}
                        {current > 0 && (
                          <Button
                            style={{ marginLeft: 8 }}
                            onClick={() => this.prev()}
                          >
                            Previous
                          </Button>
                        )}
                      </div>
                    </Paragraph>
                  </Typography>
                  <Title level={2}>评判标准</Title>
                  <Typography>
                    <Paragraph>
                      <ul>
                        <li>独创性（Originality）</li>
                        <li>可行性（Feasibility）</li>
                        <li>可用性（Usability）</li>
                        <li>
                          潜在社会影响力和价值（Potential Social Impact &
                          Value）
                        </li>
                      </ul>
                    </Paragraph>
                  </Typography>
                  <Title level={2}>奖项设置</Title>
                  <Typography>
                    <Paragraph>
                      <ul>
                        <li>一等奖：</li>
                        <li>二等奖：</li>
                        <li>三等奖：</li>
                        <li>优秀奖：</li>
                      </ul>
                    </Paragraph>
                  </Typography>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
export default App;