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
				<h4 className={this.state.opacity}>{this.props.introduction}</h4>
			</div>
		);
	}
}
class Hackathon extends Language {
    constructor(props) {
		super(props);
	}
    render() {
        const language = this.getLanguage();
        //const dataSource = hackathonConfig[language] || hackathonConfig[siteConfig.defaultLanguage];
		// const dataSource = this.getLanguageDict(language, 'hackathon');
		const dataSource = this.getLanguageDict(language, 'hackathon');
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
				
				<h2>{dataSource.sectionDescription}</h2>
				{/* <h3>2月27-28日<br>线上开跑 </h3> */}
				<div dangerouslySetInnerHTML = {{ __html:"<h3>3月6-8日<br>线上开跑 </h3>" }}></div>
				<a href="https://www.bagevent.com/event/6368833?preview=1"> <button > 立即报名 </button> </a>
				<img className="register1"  src="/images/hackathon/register1.png" />
				<img className="register2"  src="/images/hackathon/register2.png" />
			</div>
		
			<div id="hospital">
			<p>{dataSource.concepts.list[0].description}</p>	
		</div>
		
			<div id="software">
				<img src="/images/hackathon/software1.png" />
				{/* <h1 class="software1">“开发一个有用的公益软件，<br> 比捐款十个亿还管用。” </h1> */}
				<div dangerouslySetInnerHTML = {{ __html:"<h1>“开发一个有用的公益软件，<br> 比捐款十个亿还管用。” </h1>" }}></div>
				
				<p>{dataSource.concepts.list[1].description}</p>
			</div>
			
			
			<div id="HackForWuhan">
				<div className="header">
					<img src="/images/hackathon/HackForWuHanImg0.jpeg" />
					<h1>黑客马拉松等你来战</h1>
					<h2>Hack for Wuhan</h2>
					<h3> {dataSource.concepts.list[3].description} </h3>	
					
				</div>
				
			</div>
			
			<div id="hopeful">
				<div className="ho1">
					<img src="/images/hackathon/HackForWuHanImg1.png" />
					<p> {dataSource.concepts.list[4].description} </p>	
				</div>
				
				<div className="ho2">
					<img src="/images/hackathon/HackForWuHanImg2.png" />
					<p> {dataSource.concepts.list[5].description} </p>
				</div>
					
				<div className="ho3">
					<img src="/images/hackathon/HackForWuHanImg3.png" />
					<p> {dataSource.concepts.list[6].description} </p>	
				</div>
				
				<h2 className="buttom"> {dataSource.concepts.list[7].description} </h2>
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
				<h1>{dataSource.speakerTitle}</h1>
				<div>{dataSource.speakerlist.map((item) => (
                <div key={item.name}>
                    <SpeakerProfile {...item} />
                </div>))}
            	</div>
			</div>
			
			<div id="holder">
				<h1>{dataSource.holder.main}</h1>
				<div></div>
				<div><img src="/images/hackathon/holder/holder1.png" /></div>
				<div><img src="/images/hackathon/holder/holder2.png" /></div>
				<div><img src="/images/hackathon/holder/holder3.png" /></div>
			</div>
			
			<div id="holder">
				<h1>{dataSource.holder.co}</h1>
				<div><a href="https://www.freecodecamp.org/"><img src="/images/hackathon/holder_coorperation/holder_coorperation1.png" /></a></div>
				<div><a href="http://ceoceo.org/"><img src="/images/hackathon/holder_coorperation/holder_coorperation2.png" /></a></div>
				<div><a href="https://www.linkstars.com/"><img src="/images/hackathon/holder_coorperation/holder_coorperation3.png" /></a></div>
				<div><a href="https://www.agora.io/"><img src="/images/hackathon/holder_coorperation/holder_coorperation4.png" /></a></div>
			</div>
			
			<div id="holder">
				<h1>{dataSource.holder.support}</h1>
				<div></div>
				<div></div>
				<div><a href="https://www.runtheworld.today/"><img src="/images/hackathon/platform_support/platform_support1.png" /></a></div>
			</div>

			<div id="holder">
				<h1>{dataSource.holder.media}</h1>
				<div></div>
				<div></div>
				<div><a href="https://developer.ibm.com/"><img src="/images/hackathon/resource/resource1.png" /></a></div>
			</div>

			<div id="holder">
				<h1>{dataSource.holder.media}</h1>
				<div ><a href=""><img src="/images/hackathon/media/media1.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/media/media2.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/media/media3.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/media/media4.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/media/media5.png" /></a></div>
			</div>
			
			<div id="holder">
				<h1>{dataSource.holder.community}</h1>
				<div ><a href=""><img src="/images/hackathon/community/community1.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community2.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community3.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community4.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community5.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community6.png" /></a></div> 
				<div ><a href=""><img src="/images/hackathon/community/community7.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community8.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community9.png" /></a></div>	
				<div ><a href=""><img src="/images/hackathon/community/community10.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community11.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community12.png" /></a></div>	
				<div ><a href=""><img src="/images/hackathon/community/community13.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community14.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community15.png" /></a></div>	
				<div ><a href=""><img src="/images/hackathon/community/community16.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community17.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community18.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community19.png" /></a></div>
			</div>
			
			<div id="application">
				<h1>{dataSource.application.application}</h1>
				<div className="a1">
					<p>{dataSource.application.waiting}</p>
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
