import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
// import Bar from '../../components/bar';
import Footer from '../../components/footer';
import Language from '../../components/language';
// import HackathonItem from './hackathonItem';
import './index.scss';

class Hackathon extends Language {
    render() {
        const language = this.getLanguage();
        //const dataSource = hackathonConfig[language] || hackathonConfig[siteConfig.defaultLanguage];
        // const dataSource = this.getLanguageDict(language, 'hackathon');
        return (
            <div className="hackathon-page">
                <Header
                currentKey="hackathon"
                type="normal"
                logo="/images/wuhan2020-logo-gray.png"
                language={language}
                onLanguageChange={this.onLanguageChange}
                />
                {/* <Bar img="https://img.alicdn.com/tfs/TB115XwJzTpK1RjSZKPXXa3UpXa-160-160.png" text={dataSource.barText} /> */} }
                {/* <section className="hackathon-section">
                  <h3>{dataSource.sectionDescription}</h3>
                  {dataSource.concepts.list.map((hackathon, i) => (
                    <HackathonItem hackathon={hackathon} key={i} />
                    ))}
                </section> */}
            <section className="hackathon-section">

                <div id="register">
				
				{/* <h1>Hack For <br> WuHan</h1> */}
				<div dangerouslySetInnerHTML = {{ __html:"<h1>Hack For <br> WuHan</h1>" }}></div>
				
				<h2>黑客马拉松等你来战</h2>
				{/* <h3>2月27-28日<br>线上开跑 </h3> */}
				<div dangerouslySetInnerHTML = {{ __html:"<h3>3月6-8日<br>线上开跑 </h3>" }}></div>
				<a href="https://www.bagevent.com/event/6368833?preview=1"> <button > 立即报名 </button> </a>
				<img className="register1"  src="/images/hackathon/register1.png" />
				<img className="register2"  src="/images/hackathon/register2.png" />
			</div>
		
			<div id="hospital">
			<p>谁也不会预计到，新冠肺炎病毒的影响如此巨大，目前它已经发展为全球性紧急事件。虽然形势不容乐观，但我们也看到很多暖心的一幕幕在上演：众多志愿者的无私奉献，大量物资用品的捐赠，火神山、雷神山医院的火速建成，多地医疗队伍的驰援，都让这个冬天变的不那么寒冷。</p>	
		</div>
		
			<div id="software">
				<img src="/images/hackathon/software1.png" />
				{/* <h1 class="software1">“开发一个有用的公益软件，<br> 比捐款十个亿还管用。” </h1> */}
				<div dangerouslySetInnerHTML = {{ __html:"<h1>“开发一个有用的公益软件，<br> 比捐款十个亿还管用。” </h1>" }}></div>
				
				<p>而在全国对抗疫情的背后，技术支持也占据了重要的一环。民政部司长陈越良就曾公开喊话，呼吁互联网企业开发公益应用。怎么样让更多人参与其中，让信息科技等力量发挥更大的作用？</p>
			</div>
			
			
			<div id="HackForWuhan">
				<div className="header">
					<img src="/images/hackathon/HackForWuHanImg0.jpeg" />
					<h1>黑客马拉松等你来战</h1>
					<h2>Hack for Wuhan</h2>
					<h3> 作为Wuhan2020社区的志愿者和开发人员，我们将发起另一场活动：在 2020年2月底，启动Hack for Wuhan黑客马拉松，在此诚邀您利用自己的技能，为抗击疫情贡献一份力量！ </h3>	
					
				</div>
				
			</div>
			
			<div id="hopeful">
				<div className="ho1">
					<img src="/images/hackathon/HackForWuHanImg1.png" />
					<p>我们相信黑客马拉松不仅能创造出下一个独角兽企业，还能让更多人精诚团结、共赴使命、携手抗击世界性公共卫生危机。</p>	
				</div>
				
				<div className="ho2">
					<img src="/images/hackathon/HackForWuHanImg2.png" />
					<p>我们期待这样的形式出现：新的构想设计、产品原型、业务或社会影响模型，我们深信所有的努力都将会产生深远的影响。</p>
				</div>
					
				<div className="ho3">
					<img src="/images/hackathon/HackForWuHanImg3.png" />
					<p>让你的灵感产生更大的价值，我们会提供专业的技术支持，你将有机会与包括来自斯坦福大学、麻省理工学院、哈佛大学、Andreessen Horowitz、金沙江创业投资、Google、Facebook、ByteDance以及硅谷、中国和印度的初创公司的优秀导师团队互动。</p>	
				</div>
				
				<h2 className="buttom">全国人民共同对抗新冠肺炎疫情的种种，将会成为一段历史，而由此而迸发出的灵感，一定还会持续闪耀。活动中每一个有价值的想法都会得到重视，在帮助抗击疫情的同时，让我们为社会创作更多的共享价值。</h2>
			</div>	
			
			
			
			
			<div id="activity">
				<h1>活动详情</h1>
				<div className="a1">
					<img src="/images/hackathon/activity1.png" />
					<div className="a">
						<h2>时间</h2>
						<p>2020年3月6号~3月8号</p>	
					</div>
					
				</div>
				<div className="a2">
					<img src="/images/hackathon/activity2.png" />
					<div className="a">
						<h2>方式</h2>
						<p>完全线上进行，鼓励分布式协作的方式</p>
					</div>
				</div>
				<div className="a3">
					<img src="/images/hackathon/activity3.png" />
					<div className="a">
						<h2>内容</h2>
						<p>根据“武汉2020”提供的数据进行设计和开发比赛，完成作品提交以及介绍视频（创意、作品简介以及意义）。</p>
					</div>
		
				</div>
				<div className="a4">
					<img src="/images/hackathon/activity4.png" />
					<div className="a">
						<h2>奖励</h2>
						<p>评委和社区对参与者和项目进行评选排名，向优胜者颁发奖励。</p>
					</div>
				</div>
				
			</div>
		
			<div id="subject">
				<h1>赛题范围和形式</h1>
				<div className="s1">
					<h2>可选的主题包括</h2>
					<ul>
						<li>针对疫情的标注数据</li>
						<li>相关技术的创新应用</li>
						<li>社会公益和科普宣传</li>
						<li>应对本次公共危机下出现的各类社会挑战的解决方案</li>
					</ul>		
				</div>
				<div className="s2">
					<h2>表现方式（不限于）</h2>
					<ul>
						<li>视频、动画等艺术设计作品</li>
						<li>动态网页</li>
						<li>开源数据	</li>
						<li>数据的分析预测模型</li>
						<li>可视化平台、网站</li>
						<li>针对疫情的产品应用</li>
						<li>分析调查报告、策划书</li>
					</ul>		
				</div>
			</div>
			
			<div id="participant">
				<h1>参赛人员</h1>
				<div className="p1">
					<h2>参赛选手</h2>
					<ul>
						<li>来自开源社区（例如Wuhan2020和GitHub上其他社区）的开发人员，有出色的想法和原型，能解决当下的挑战并创造共享价值；</li>
						<li>希望通过开源方式来提高社会影响力的志愿者；</li>
						<li>积极应对COVID-19挑战以及社会紧急危机的企业家、创业者.</li>
					</ul>
				</div>
				<div className="p2">
					<h2>观众</h2>
					<ul>
						<li>Hackathon参赛个人及团队</li>
						<li>受邀人-评委，导师，专业人员（企业家，社会创新者，风险投资人等）</li>
						<li>任何对此活动感兴趣并想要观摩学习的人。</li>
					</ul>
				</div>
			</div>
			
		
			<div id="speaker">
				<h1>演讲人和评委</h1>
				<div className="s1">
					<img  src="/images/hackathon/speaker/Lu_Huimin.jpeg" />
					<h2>Huimin Lu</h2>
					<h3>Microsoft Cloud and AI Strategy Sr Manager</h3>
					<p>I worked closely with the product to figure out product roadmap and go to market strategy.</p>
				</div>
				<div className="s2">
					<img  src="/images/hackathon/speaker/Chun_Jiang.jpeg" />
					<h2>Chun Jiang</h2>
					<h3>Product Design @ Scale AI</h3>
					<p>Driven to create unique products that foster connection and innovation, Chun has had experience with consumer-facing product design, machine learning, data design, IoT, design system, and autonomous driving. Chun is now leading 3D annotation & data product design at Scale AI. Previously worked at Uber. Undergraduate & Graduate degrees at Cornell.</p>
				</div>
				<div className="s3">
					<img  src="/images/hackathon/speaker/Jason_Gui.jpeg" />
					<h2>Jason Gui</h2>
					<h3>Vue Glasses CTO</h3>
					<p>As founder of Vigo and Vue, Jason has created innovative hardware products and raised over $2 million USD through Kickstarter. Jason brings a background of mechanical and electrical engineering, marketing, production, and business expertise.</p>
				</div>
				<div className="s4">
					<img  src="/images/hackathon/speaker/Zhiyang_Wang.jpeg" />
					<h2>Zhiyang Wang</h2>
					<h3>Facebook Software Engineer</h3>
					<p>Let's see how we can help Wuhan by HACKING! Have been hacking in Facebook for 6 years across multiple products on mobile, on web, for users, for advertisers, for creators, from US, from LATAM and also from China! Let's unite everyone everywhere!</p>
				</div>
				<div className="s5">
					<img  src="/images/hackathon/speaker/Claire_Li.jpeg" />
					<h2>Claire Li</h2>
					<h3>Pinterest, Sr.Software Engineer</h3>
					<p>Claire is a product builder, open source contributor, and Sr. engineer at Pinterest. She has built a open source project with 500+ stars on GitHub and holds two patents. She has shipped products to millions of users in eCommerce, payment and social media space. Claire also runs a community of aspiring entrepreneurs. She received her bachelor in CS from UC-Berkeley.</p>
				</div>
				<div className="s6">
					<img  src="/images/hackathon/speaker/Zhao_Matthew.jpeg" />
					<h2>Matth Zhao</h2>
					<h3>Google/Software Engineer</h3>
					<p>Matt is currently an enginner at Google and previously worked at Snapchat(2015-2019). Matt got his master and bachelor's degrees in CS from  Rice University. He attended various hackathons while in school and is excited to offer technical support for "Hack for Wuhan".</p>
				</div>
				<div className="s7">
					<img src="/images/hackathon/speaker/Haimo_Liu.jpeg" />
					<h2>Haimo Liu</h2>
					<h3>Alibaba Cloud, Staff Product Manager</h3>
					<p>'We can't help everyone, but everyone can help someone.' Wuhan might not be your home town or home country, but we are all part of this global community. Helping others in this community not only makes this community better, but also makes you feel great in the process.</p>
				</div>
			</div>
			
			<div id="holder">
				<h1>主办方</h1>
				<div><img src="/images/hackathon/holder/holder1.png" /></div>
				<div><img src="/images/hackathon/holder/holder2.png" /></div>
				<div><img src="/images/hackathon/holder/holder3.png" /></div>
			</div>
			
			<div id="holder">
				<h1>协办方</h1>
				<div><a href="https://www.freecodecamp.org/"><img src="/images/holder_coorperation/holder_coorperation1.jpeg" /></a></div>
				<div><a href="http://ceoceo.org/"><img src="/images/holder_coorperation/holder_coorperation2.jpeg" /></a></div>
				<div><a href="https://www.linkstars.com/"><img src="/images/holder_coorperation/holder_coorperation3.jpeg" /></a></div>
				<div><a href="https://www.agora.io/"><img src="/images/holder_coorperation/holder_coorperation4.jpeg" /></a></div>
			</div>
			
			<div id="holder">
				<h1>平台支持</h1>
				<div className="h1"><img src="/images/hackathon/sponsor/sponsor1.png" /></div>
				<div className="h2"><img src="/images/hackathon/sponsor/sponsor2.png" /></div>
				<div className="h3"><img src="/images/hackathon/sponsor/sponsor3.png" /></div>
				<div className="h4"><img src="/images/hackathon/sponsor/sponsor4.png" /></div>
			</div>
			
			<div id="holder">
				<h1>媒体合作</h1>
				<div className="h1"><img src="/images/hackathon/sponsor/sponsor1.png" /></div>
				<div className="h2"><img src="/images/hackathon/sponsor/sponsor2.png" /></div>
				<div className="h3"><img src="/images/hackathon/sponsor/sponsor3.png" /></div>
				<div className="h4"><img src="/images/hackathon/sponsor/sponsor4.png" /></div>
			</div>
			
			<div id="holder">
				<h1>社区合作</h1>
				<div className="h1"><img src="/images/hackathon/sponsor/sponsor1.png" /></div>
				<div className="h2"><img src="/images/hackathon/sponsor/sponsor2.png" /></div>
				<div className="h3"><img src="/images/hackathon/sponsor/sponsor3.png" /></div>
				<div className="h4"><img src="/images/hackathon/sponsor/sponsor4.png" /></div>
			</div>
			
			<div id="application">
				<h1>立即报名</h1>
				<div className="a1">
					<p>敬请期待</p>
				</div>
			</div>
            </section>


            
                <Footer logo="/images/wuhan2020-logo-gray.png" language={language} />
            </div>
        );
    }
}

document.getElementById('root') && ReactDOM.render(<Hackathon/>, document.getElementById('root'));

export default Hackathon;
