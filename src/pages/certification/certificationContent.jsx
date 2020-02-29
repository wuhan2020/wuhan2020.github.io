import React from 'react';

import './certificationContent.scss';

class CertificationContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            status: 'notfoundWarn',
            isShowImage: false,
        };
=======
            status: 'notfoundWarn'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
>>>>>>> dev
    }
    getAlertType(status) {
        let type = ['error', 'warn'].filter( type => status.toLowerCase().includes(type))[0];
        return  type || 'successful';
    }

<<<<<<< HEAD
    handleSubmit = (event) => {
=======
    handleSubmit(event) {
>>>>>>> dev
        event.preventDefault();
        this.setState({
            status: 'userError'
        });
<<<<<<< HEAD
    };
    
    handleResizing = () => {
        this.setState({
            isShowImage: window.innerWidth > 1200
        });
    };

    componentDidMount() {
        window.addEventListener('resize', handleResizing);
    }

    componentDidUpdate() {
        window.addEventListener('resize', handleResizing);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizing);
    }

    render() {
        const { formText, alertMsgs } = this.props.dataSource;
        const alertType = this.getAlertType(this.state.status);
=======
    }
    render() {
        const { formText, alertMsgs } = this.props.dataSource;
        
>>>>>>> dev
        return (
            <section>
                <div className="certification-content">
                    <div className="certification-content-alerts row">
<<<<<<< HEAD
                        <span className={`alert ${alertType}`}>{alertMsgs[this.state.status]}</span>
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
=======
                        <span className={`alert ${this.getAlertType(this.state.status)}`}>{alertMsgs[this.state.status]}</span>
                    </div>
                    <div className="certification-content-main row">
                        <aside className="column">
                            <figure>
                                <img src="/images/certification/illustration.png" />
                            </figure>
                        </aside>
>>>>>>> dev
                        <form className="column" onSubmit={this.handleSubmit}>
                            <fieldset>
                                <legend>{formText.header}</legend>
                                <div className="form-row email">
                                    <label>{formText.emailLabel}</label>
                                    <input type="email" name="mail" />
                                </div>
                                <div className="form-row name">
<<<<<<< HEAD
                                    <label>{formText.nicknameLabel}
                                        <span className="description">{formText.nicknameDescription}</span>
                                    </label>
=======
                                    <label>{formText.nicknameLabel}</label>
                                    <span className="description">{formText.nicknameDescription}</span>
>>>>>>> dev
                                    <input type="text" name="name" />
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