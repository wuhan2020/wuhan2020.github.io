import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
// import Bar from '../../components/bar';
import Footer from '../../components/footer';
import Language from '../../components/language';
// import HackathonItem from './hackathonItem';
import './index.scss';

const ActivityProfile = (props) => {
	return (<div className={props.class_name}>
				<img src={"/images/hackathon/" + props.image_name} />
				<div className="a">
					<h2>{props.name}</h2>
					<p>{props.content}</p>	
				</div>
			</div>);
}
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
				<a href="https://www.bagevent.com/event/6368833?preview=1"> <button > {dataSource.application.application} </button> </a>
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
					<h1>{dataSource.sectionDescription}</h1>
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
				<h1>{dataSource.activity.detail}</h1>
				{dataSource.activity.activityList.map((item) => (
                <div key={item.name}>
                    <ActivityProfile {...item} />
                </div>))}
			</div>
		
			<div id="subject">
				<h1>{dataSource.subject.name}</h1>
				<div className="s1">
					<h2>{dataSource.subject.subject_name}</h2>
					<ul>
						{dataSource.subject.subject.map((item, index) => (
							<li key={index}>{item}</li>))}
					</ul>
				</div>
				<div className="s2">
					<h2>{dataSource.subject.form_name}</h2>
					<ul>
					{dataSource.subject.form.map((item, index) => (
							<li key={index}>{item}</li>))}
					</ul>		
				</div>
			</div>
			
			<div id="participant">
				<h1>{dataSource.participant.name}</h1>
				<div className="p1">
					<h2>{dataSource.participant.person}</h2>
					<ul>
						<li>{dataSource.participant.person_description_1}</li>
						<li>{dataSource.participant.person_description_2}</li>
						<li>{dataSource.participant.person_description_3}</li>
					</ul>
				</div>
				<div className="p2">
					<h2>{dataSource.participant.audience}</h2>
					<ul>
						<li>{dataSource.participant.audience_description_1}</li>
						<li>{dataSource.participant.audience_description_2}</li>
						<li>{dataSource.participant.audience_description_3}</li>
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
				<div><a href="https://developer.ibm.com/"><img src="/images/hackathon/resource/resource1.png" /></a></div>
				<div><a href=""><img src="/images/hackathon/resource/resource2.png" /></a></div>
				<div><a href=""><img src="/images/hackathon/resource/resource3.png" /></a></div>
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
				<div ><a href=""><img src="/images/hackathon/community/community20.png" /></a></div>
				<div ><a href=""><img src="/images/hackathon/community/community21.png" /></a></div>
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
