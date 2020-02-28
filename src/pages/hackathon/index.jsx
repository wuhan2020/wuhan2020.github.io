import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
// import Bar from '../../components/bar';
import Footer from '../../components/footer';
import Language from '../../components/language';
// import HackathonItem from './hackathonItem';
import './index.scss';

class SpeakerProfile extends React.Component {
    constructor(props){
		super(props);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.state = {opacity: "opacity"}
	}
	handleMouseMove(props) {
		this.setState({opacity: "transparency"})
	}
	handleMouseLeave(props) {
		this.setState({opacity: "opacity"})
	}
	render() {		
		return (
			<div className="speaker" onMouseMove={this.handleMouseMove}
				onMouseLeave={this.handleMouseLeave}>
				<img src={"/images/hackathon/speaker/" + this.props.img} />
				<h2>{this.props.name}</h2>
				<h3 className={this.state.opacity}>{this.props.job}</h3>
				<h4 className={this.state.opacity}>{this.props.introducion}</h4>
			</div>
		);
	}
}
class Hackathon extends Language {
    constructor(props) {
		super(props);
		this.state = {
			speakerlist: [
				{
					name:"Huimin Lu",
					img:"Lu_Huimin.jpeg",	
					job:"Microsoft Cloud and AI Strategy Sr Manager",
					introduction:"I worked closely with the product to figure out product roadmap and go to market strategy.",
				},
				{
					name:"Chun Jiang",
					img:"Chun_Jiang.jpeg",	
					job:"Product Design @ Scale AI",
					introduction:"Driven to create unique products that foster connection and innovation, Chun has had experience with consumer-facing product design, machine learning, data design, IoT, design system, and autonomous driving. Chun is now leading 3D annotation & data product design at Scale AI. Previously worked at Uber. Undergraduate & Graduate degrees at Cornell.",
				},
				{
					name:"Jason Gui",
					img:"Jason_Gui.jpeg",
					job:"Vue Glasses CTO",
					introduction:"As founder of Vigo and Vue, Jason has created innovative hardware products and raised over $2 million USD through Kickstarter. Jason brings a background of mechanical and electrical engineering, marketing, production, and business expertise.",
				},
				{
					name:"Zhiyang Wang",
					img:"Zhiyang_Wang.jpeg",
					job:"Facebook Software Engineer",
					introduction:"Let's see how we can help Wuhan by HACKING! Have been hacking in Facebook for 6 years across multiple products on mobile, on web, for users, for advertisers, for creators, from US, from LATAM and also from China! Let's unite everyone everywhere!",
				},
				{
					name:"Claire Li",
					img:"Claire_Li.jpeg",
					job:"Pinterest, Sr.Software Engineer",
					introduction:"Claire is a product builder, open source contributor, and Sr. engineer at Pinterest. She has built a open source project with 500+ stars on GitHub and holds two patents. She has shipped products to millions of users in eCommerce, payment and social media space. Claire also runs a community of aspiring entrepreneurs. She received her bachelor in CS from UC-Berkeley.",
				},
				{
					name:"Matth Zhao",
					img:"Zhao_Matthew.jpeg",
					job:"Google/Software Engineer",
					introduction:"Matt is currently an enginner at Google and previously worked at Snapchat(2015-2019). Matt got his master and bachelor's degrees in CS from  Rice University. He attended various hackathons while in school and is excited to offer technical support for 'Hack for Wuhan'.",
				},
				{	
					name:"Haimo Liu",
					img:"Haimo_Liu.jpeg",	
					job:"Alibaba Cloud, Staff Product Manager",
					introduction:"'We can't help everyone, but everyone can help someone.' Wuhan might not be your home town or home country, but we are all part of this global community. Helping others in this community not only makes this community better, but also makes you feel great in the process.",
				},
				{
					name:"Tianyu Bao",
					img:"Tianyu_Bao.jpeg",	
					job:"Product Manager at Uber",
					introduction:"I'm a product manager at Uber Eats, dedicated to offering a seamless food delivery experience to our users. As a PM, I hope to contribute my efforts to Wuhan by supporting hackers to build better product solutions.",
				},
				{
					name:"Xander Wu",
					img:"Xander_Wu.jpeg",	
					job:"Founder of Hack for Wuhan@wuhan2020",
					introduction:"As the founder of Hack for Wuhan @wuhan2020, Xander is passionate about working with you to align social and commercial value, tailor product-market fit, and seek go-to-market fit.He has achieved many #1 in global 4G and 5G market and advised a number of startups in B2B business growth.",
				},
				{
					name:"Borui Wang",
					img:"Borui_Wang.jpeg",	
					job:"Polarr, Founder and CEO",
					introduction:"Borui started Polarr in 2015 after he graduated from Stanford studying Computer Science. Today Polarr powers millions of creators to craft their own creative styles. The company's apps have won Apple Best of App Store three times over the last four years; its computational photography engine also powers key systems in flagship consumer devices made by Samsung, OPPO, etc.",
				},
				{
					name:"Han Chen",
					img:"Han_Chen.jpeg",	
					job:"Software Engineer/ Blogger",
					introduction:"Han is a Software Tech Lead engineer in one of the Silicon Valley internet company. He had the experience on Monetization solution, ads, SMB business, social media and mobile infra. He is also a Best Seller book writer. His new book The Thinking of Silicon Valley (????) achieved Top 2 New Tech book award, the Korean and English version will be published soon as well.",
				},
				{
					name:"Gordon Cheng",
					img:"Gordon_Cheng.jpeg",	
					job:"Wilson Sonsini, Attorney",
					introduction:"Gordon practices corporate and securities law in the Silicon Valley. He primarily works with tech companies and startups, but has done quite some pro bono legal work as well. He looks forward to providing legal support for the participants.",
				},
				{
					name:"Jaggie Zhu",
					img:"Jaggie_Zhu.jpeg",	
					job:"Ex-Director, AI Product Development, Byte Dance",
					introduction:"Jaggie most recently led investment and the development of AI innovations at Bytedance. Before that, she and three Stanford GSB alumni co-founded a Beijing e-commerce startup dealing with secondhand cars. Chen started her career at P&G as a PM. Her investments range from leading self-driving AI to Craigslist.",
				},
				{
					name:"Tianyu Wu",
					img:"Tianyu_WU.jpeg",	
					job:"Ex-Director, AI Product Development, Byte Dance",
					introduction:"Tianyu believes in the intersection between data and design. Currently working as a Sr Product designer at FB, previously in Spotify and unicorn startups. She has been teaching UX for years and has a mixed background in product and design. She strives to create simple and delightful products to help people solve problems.",
				},
				{
					name:"Jack Duan",
					img:"Jack_Duan.jpeg",	
					job:"Gliding Eagle Inc., Founder and CEO",
					introduction:"Former Sr Technologist (Sun Microsystems) and Big Data Product Manager (Marketing Strategy, Safeway). Dual-cultural in the US and China. BS in CS, Indiana U.; MBA, Berkeley-Haas.",
				},
				{
					name:"Xiaoyin Qu",
					img:"Xiaoyin_Qu.jpeg",	
					job:"CEO, Run The World",
					introduction:"Xiaoyin is CEO of Run The World, a platform that enables live online events. Previously she was a senior Product Manager at Facebook and Instagram, and a bestselling author for Silicon Valley Products, a product management book published in China.",
				},
				{
					name:"Klaus Wang",
					img:"Klaus_Wang.jpeg",	
					job:"Sequoia Capital, VP",
					introduction:"Am working with Sequoia Capital Singapore office covering SEA and Indian market.",
				},
				{
					name:"Peter Qian",
					img:"Peter_Qian.jpeg",	
					job:"covariant.ai, Head of Engineering",
					introduction:"",
				},
				{
					name:"Thomas Reese",
					img:"nobody.jpeg",	
					job:"Run The World",
					introduction:"Thomas led engineering products in Video for Facebook and co-founded FlipWord. He attained a CS Masters from the University of Illinois. He is currently the tech lead of Run the World.",
				},
				{
					name:"Anna Fang",
					img:"Anna_Fang.jpeg",	
					job:"Founding Partner & CEO at ZhenFund",
					introduction:"Anna Fang is CEO and Partner of ZhenFund, an early stage venture capital firm in China focused on consumer Internet and technologies enabled compaines. In her role as CEO, Anna leads Zhenfund's investments, portfolio management, and operations. Anna led ZhenFund's investments in unicorns such as RED (XiaoHongShu), Perfect Diary, Mia, Club Factory, Yitu, Mobvoi, Horizon Robotics, and VIPKID.",
				},
				{
					name:"Eva Woo",
					img:"Eva_Woo.jpeg",	
					job:"China Program Manager",
					introduction:"Eva is the China Program Manager at Stanford PACS. Prior to joining PACS, Eva spent 15 years as a journalist and entrepreneur focused on U.S.-China innovation and impact. A financial journalist by training, she worked as a business and economics reporter at Bloomberg, Caixin, South China Morning Post, and the Washington Post.",
				},
				{
					name:"Big Joe",
					img:"Big_Joe.jpeg",	
					job:"Product Manager?Google",
					introduction:"Joe is an experienced product manager at Google on ads, enterprise software, and video streaming products. He was innovative in measuring ads effectiveness for SMB advertisers and filed a patent in that field. Meanwhile, Joe is a frequent speaker and trainer at top MBA programs such as Wharton at UPenn and mentors many Chinese MBA students. Joe has double bachelor's degrees in CS and English from Huazhong University of Science and Technology, a Master?s degree in CS from Peking University and an MBA from Emory University.",
				},
				{
					name:"Kate Jia",
					img:"Kate_Jia.jpeg",	
					job:"Sr Product Designer  @devicebook Product Lead of Wuhan 2020",
					introduction:"Leading the design for most pioneer IoT products for more than 5 years. Since Jan 2020, Kate has been leading the volunteers in Wuhan2020 product team to craft the most meaningful product for this global public health situations. Graduate from Tsinghua University.",
				},
				{
					name:"Xuan Jiang",
					img:"nobody.jpeg",	
					job:"Co-founder & CTO at Run The World",
					introduction:"",
				},
				{
					name:"Weili Dong",
					img:"nobody.jpeg",	
					job:"CEO, President",
					introduction:"",
				},
				{
					name:"Cindy Cao",
					img:"nobody.jpeg",	
					job:"Didi?Senior Software Engineer",
					introduction:"",
				},
				{
					name:"Wen Han",
					img:"Wen_Han.jpeg",	
					job:"GSR Ventures, Investor",
					introduction:"GSR Ventures ????? was the first and biggest investor in Didi ($56bn), Eleme ($9bn), Qunar ($11bn), Xiaohongshu ($3bn), amongst other transformative companies.",
				},
				{
					name:"Xi Fang",
					img:"nobody.jpeg",	
					job:"Founding Partner of Button",
					introduction:"Dr Xi Fang is Founding Partner of Button",
				},
				{
					name:"Rick Zhuang",
					img:"nobody.jpeg",	
					job:"",
					introduction:"",
				},
				{
					name:"Huan Xu",
					img:"Huan_Xu.jpeg",	
					job:"Serial Entrepreneur",
					introduction:"",
				},
				]
		};
	}
    render() {
        const language = this.getLanguage();
        //const dataSource = hackathonConfig[language] || hackathonConfig[siteConfig.defaultLanguage];
		// const dataSource = this.getLanguageDict(language, 'hackathon');
        const SpeakerList = this.state.speakerlist.map((item) => {
            return (
                <div key={item.name}>
                    <SpeakerProfile {...item} />
                </div>
            );
        })		
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
				<div>{SpeakerList}</div>
			</div>
			
			<div id="holder">
				<h1>主办方</h1>
				<div></div>
				<div><img src="/images/hackathon/holder/holder1.png" /></div>
				<div><img src="/images/hackathon/holder/holder2.png" /></div>
				<div><img src="/images/hackathon/holder/holder3.png" /></div>
			</div>
			
			<div id="holder">
				<h1>协办方</h1>
				<div><a href="https://www.freecodecamp.org/"><img src="/images/hackathon/holder_coorperation/holder_coorperation1.jpeg" /></a></div>
				<div><a href="http://ceoceo.org/"><img src="/images/hackathon/holder_coorperation/holder_coorperation2.jpeg" /></a></div>
				<div><a href="https://www.linkstars.com/"><img src="/images/hackathon/holder_coorperation/holder_coorperation3.jpeg" /></a></div>
				<div><a href="https://www.agora.io/"><img src="/images/hackathon/holder_coorperation/holder_coorperation4.jpeg" /></a></div>
			</div>
			
			<div id="holder">
				<h1>平台支持</h1>
				<div></div>
				<div></div>
				<div><a href="https://www.runtheworld.today/"><img src="/images/hackathon/platform_support/platform_support1.png" /></a></div>
			</div>

			<div id="holder">
				<h1>资源提供</h1>
				<div></div>
				<div></div>
				<div><a href="https://developer.ibm.com/"><img src="/images/hackathon/resource/resource1.png" /></a></div>
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
