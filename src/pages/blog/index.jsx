import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../../components/language';
import Header from '../../components/header';
import Bar from '../../components/bar';
import PageSlider from '../../components/pageSlider';
import BlogItem from './blogItem';
import Footer from '../../components/footer';
import siteConfig from '../../../site_config/site';
import { getLink } from '../../../utils';
import mdJson from '../../../md_json/blog.json';
import Gitalk from '../../components/gitalk'
import './index.scss';
const {
  langList = [
      { value: 'zh-cn', text: '简体中文' },
      { value: 'en-us', text: 'English' },
      { value: 'ja-jp', text: '日本語' },
      { value: 'it-it', text: 'Italiano' },
      { value: 'pt-br', text: 'Português' }
    ]
} = siteConfig;

const langValueList = langList.map(l => l.value);

// 博客列表数据，按时间排序
const blogs = {};
langValueList.forEach((lang) => {
  blogs[lang] = mdJson[lang].filter(md => (
    (!md.meta.hidden || md.meta.hidden === 'false') && md.link.indexOf('download.html') === -1 && md.link.indexOf('client.html') === -1
  )).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
});

class Blog extends Language {

  render() {
    const language = this.getLanguage();
    //const dataSource = blogConfig[language] || blogConfig[siteConfig.defaultLanguage];
    const dataSource = this.getLanguageDict(language, 'blog');
    const blogList = blogs[language];
    return (
      <div className="blog-list-page">
        <Header
          type="normal"
          currentKey="blog"
          logo="/images/wuhan2020-logo.png"
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <Bar img="https://img.alicdn.com/tfs/TB1gQ8uJyrpK1RjSZFhXXXSdXXa-160-160.png" text={dataSource.barText} />
        <section className="blog-container">
          <div className="col col-18 left-part">
            <PageSlider pageSize={5}>
            {
              blogList.map((blog, i) => (
                <BlogItem key={i} dataSource={blog} />
              ))
            }
            </PageSlider>
          </div>
          <div className="col col-6 right-part">
            <h4>{dataSource.postsTitle}</h4>
            <ul>
            {
              blogList.map((blog, i) => (
                <li key={i}><a href={getLink(blog.link)} target={blog.target || '_self'}><span>{blog.meta.date}&nbsp;&nbsp;</span><span>{blog.meta.title}</span></a></li>
              ))
            }
            </ul>
          </div>
        </section>
        <Gitalk class_name="blog-container"/>
        <Footer logo="/images/wuhan2020-logo-gray.png" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Blog />, document.getElementById('root'));

export default Blog;
