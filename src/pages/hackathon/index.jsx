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
				<button> 立即报名 </button>
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
				
				<table>
					<tr>
                        <td className="HackForWuhan1">
							<img src="/images/hackathon/HackForWuHanImg1.png" />
							<p >我们相信黑客马拉松不仅能创造出下一个独角兽企业，还能让更多人精诚团结、共赴使命、携手抗击世界性公共卫生危机。</p>
						</td>
						<td className="HackForWuhan2">
							<img src="/images/hackathon/HackForWuHanImg2.png" />
							<p >我们期待这样的形式出现：新的构想设计、产品原型、业务或社会影响模型，我们深信所有的努力都将会产生深远的影响。</p>
						</td>
						<td className="HackForWuhan3">
							<img src="/images/hackathon/HackForWuHanImg3.png" />
							<p >让你的灵感产生更大的价值，我们会提供专业的技术支持，你将有机会与包括来自斯坦福大学、麻省理工学院、哈佛大学、Andreessen Horowitz、金沙江创业投资、Google、Facebook、ByteDance以及硅谷、中国和印度的初创公司的优秀导师团队互动。</p>	
						</td>	
					</tr>
				</table>		
				<p className="buttom">全国人民共同对抗新冠肺炎疫情的种种，将会成为一段历史，而由此而迸发出的灵感，一定还会持续闪耀。活动中每一个有价值的想法都会得到重视，在帮助抗击疫情的同时，让我们为社会创作更多的共享价值。</p>
				
			</div>
			
			
			<div id="speaker">
				<table>
					<thead>
						<th colSpan="3">演讲人和评委</th>
					</thead>
					<tbody>
						<tr>
							<td>
								<img src="/images/hackathon/human.png" />
								<p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
							</td>
							<td>
								<img src="/images/hackathon/human.png" />
								<p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
							</td>
							<td>
								<img src="/images/hackathon/human.png" />
								<p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
							</td>
						</tr>	
						<tr>
							<td>
								<img src="/images/hackathon/human.png" />
								<p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
							</td>
							<td>
								<img src="/images/hackathon/human.png" />
								<p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
							</td>
							<td>
								<img src="/images/hackathon/human.png" />
								<p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
							</td>
						</tr>	
					</tbody>	
				</table>	
			</div>
			
			
			<div  id="sponsor">
				<table>
					<thead>
						<th colSpan="3">主办方</th>
					</thead>
					<tbody>
						<tr>
							<td><img src="/images/hackathon/007-01.png" /></td>
							<td><img src="/images/hackathon/007-02.png" /></td>
							<td><img src="/images/hackathon/007-03.png" /></td>
						</tr>	
					</tbody>	
				</table>	
			</div>

                    </section>


            
                <Footer logo="/images/wuhan2020-logo-gray.png" language={language} />
            </div>
        );
    }
}

document.getElementById('root') && ReactDOM.render(<Hackathon/>, document.getElementById('root'));

export default Hackathon;
