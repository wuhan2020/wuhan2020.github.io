import React from 'react';

import Icon from 'antd/lib/icon';

import './certificationContent.scss';

const siteConfig = require('./../../../site_config/site').default;

class CertificationContent extends React.Component {
    constructor(props) {
        super(props);
        let host = siteConfig.api;
        this.state = {
            host: host,
            email: 'mail@example.io',
            name: 'mock user',
            status: 'error',
            isShowImage: false,
            token: '',
        };
    }
    getUserInfo(token) {
        let api = this.state.host + 'api/getUserInfo?token=' + token;
        this.fetchCertificationApi(api, null, 'GET') 
            .then( res => res.json() )
            .then( (data) => {
                 if(data.code == 0)
                    this.setState({
                        email: data.data.email,
                        name: data.data.name
                    });
             })
             .catch( (error) => {
                 console.error('Error:', error);
             });
    }
    getAlertType(status) {
        let type = ['error', 'warn'].filter( type => status.toLowerCase().includes(type))[0];
        return  type || 'successful';
    }
    getParameterByName(name) {
        const match = RegExp(`[?&]${name}=([^&]*)`).exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    getToken = () => this.getParameterByName('token'); 

    // return fetch promise
    fetchCertificationApi = (api, data, method='POST') => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let configurations = {
            method: method,
            mode: 'cors',
            headers: headers,            
        }
        if(method == 'POST')
            configurations['body'] = JSON.stringify(data);
        return  fetch(api, configurations);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        /** @TODO waiting for API */
        /** @FIXME fetch not support by IE, fixed it by using polyfill */
        const { name, token } = this.state;
        const api = this.state.host + "api/submitUserInfo"; // local testing api
        const payloadData = { name, token };
        this.fetchCertificationApi(api, payloadData)
            .then( res => res.json() )
            .then( (data) => {
                let status_text = 'notfoundWarn'
                if(data.code == 0)
                    status_text = 'successful'
                this.setState({
                    status: status_text
                });
            })
            .catch( (error) => {
               console.error('Error:', error);
            });

        // mock data test start
        const mockStatusMap = {
            successful: 'successful',
            error: 'error',
            warn: 'warn'
        };

        this.setState({
            status: mockStatusMap[this.state.name] || 'error'
        }); // mock data test end
    };
    
    handleResizing = () => void this.setState({ isShowImage: window.innerWidth > 1200 });

    handleEmailChange = (e) => void this.setState({email: e.target.value});

    handleNameChange = (e) => void this.setState( {name: e.target.value});

    componentDidMount() {
        this.handleResizing();
        window.addEventListener('resize', this.handleResizing);
        const token = this.getToken();
        this.setState( { token });
        this.getUserInfo(token);
    }

    componentDidUpdate() {
        window.addEventListener('resize', this.handleResizing);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizing);
    }

    render() {
        const iconTypeMap = {
            successful: 'check-circle',
            error: 'close-circle',
            warn: 'exclamation-circle',
        }; 
        const { formText, alertMsgs } = this.props.dataSource;
        const alertType = this.getAlertType(this.state.status);
        return (
            <section>
                <div className="certification-content">
                    <div className={`certification-content-alerts row ${alertType}`}>
                        <Icon type={iconTypeMap[alertType]} theme="filled" /> 
                        <span className="alert-msg">
                            {alertMsgs[this.state.status]}
                        </span>
                    </div>
                    <div className="certification-content-main row">
                        {
                            this.state.isShowImage && 
                            <aside className="column">
                                <figure>
                                    <img src="/images/certification/illustration.png" />
                                </figure>
                            </aside>
                        }
                        <form className="column" onSubmit={this.handleSubmit}>
                            <fieldset>
                                <legend>{formText.header}</legend>
                                <div className="form-row email">
                                    <label>{formText.emailLabel}</label>
                                    <input type="email" name="mail" value={this.state.email} onChange={this.handleEmailChange}/>
                                </div>
                                <div className="form-row name">
                                    <label>{formText.nicknameLabel}
                                        <span className="description">{formText.nicknameDescription}</span>
                                    </label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                                </div>
                                <div className="form-row action">
                                    <input type="submit" value={formText.action} />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default CertificationContent