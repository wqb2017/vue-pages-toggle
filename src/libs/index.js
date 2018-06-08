import './style.scss';
import pagesToggle from './pages-toggle/index';
import pagesTogglePanel from './pages-toggle-panel/index';

const comment = {
  install: function(Vue) {
    Vue.component('pagesToggle', pagesToggle);
    Vue.component('pagesTogglePanel', pagesTogglePanel);
  },
};
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment);
}
// 导出模块
export default comment;
