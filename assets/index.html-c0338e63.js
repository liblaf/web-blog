import{_ as i,X as r,Y as n,Z as t,a0 as e,$ as o,a1 as a,E as l}from"./framework-9435e890.js";const s={},c=a('<h2 id="task-0" tabindex="-1"><a class="header-anchor" href="#task-0" aria-hidden="true">#</a> Task 0</h2><h3 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h3><table><thead><tr><th>Option</th><th>Elapsed Time / seconds</th><th>Performance / GFlops</th></tr></thead><tbody><tr><td><code>-O0</code></td><td>1.0072</td><td>0.2665</td></tr><tr><td><code>-O1</code></td><td>0.3461</td><td>0.7755</td></tr><tr><td><code>-O2</code></td><td>0.3332</td><td>0.8057</td></tr><tr><td><code>-O3</code></td><td>0.0496</td><td>5.4081</td></tr><tr><td><code>-fast</code></td><td>0.0386</td><td>6.9524</td></tr></tbody></table><h2 id="task-1" tabindex="-1"><a class="header-anchor" href="#task-1" aria-hidden="true">#</a> Task 1</h2><h3 id="performance-1" tabindex="-1"><a class="header-anchor" href="#performance-1" aria-hidden="true">#</a> Performance</h3><table><thead><tr><th><code>UNROLL_N</code></th><th>Elapsed Time / seconds</th><th>Performance / GFlops</th></tr></thead><tbody><tr><td>1</td><td>2.0814</td><td>15.7431</td></tr><tr><td>2</td><td>1.9311</td><td>16.9688</td></tr><tr><td>4</td><td>1.8048</td><td>18.1562</td></tr><tr><td>8</td><td>1.7787</td><td>18.4227</td></tr><tr><td>16</td><td>1.8276</td><td>17.9297</td></tr></tbody></table><h2 id="回答问题" tabindex="-1"><a class="header-anchor" href="#回答问题" aria-hidden="true">#</a> 回答问题</h2><h5 id="question-1" tabindex="-1"><a class="header-anchor" href="#question-1" aria-hidden="true">#</a> Question 1</h5>',8),h={href:"https://www.intel.com/content/www/us/en/develop/documentation/cpp-compiler-developer-guide-and-reference/top/compiler-reference/compiler-options/alphabetical-list-of-compiler-options.html",target:"_blank",rel:"noopener noreferrer"},u=t("code",null,"-O0",-1),f=t("code",null,"-O1",-1),p=t("code",null,"-O2",-1),m=t("code",null,"-O3",-1),_=t("code",null,"-fast",-1),b=a('<h5 id="answer-1" tabindex="-1"><a class="header-anchor" href="#answer-1" aria-hidden="true">#</a> Answer 1</h5><h6 id="o0" tabindex="-1"><a class="header-anchor" href="#o0" aria-hidden="true">#</a> <code>-O0</code></h6><p>禁用所有优化</p><h6 id="o1" tabindex="-1"><a class="header-anchor" href="#o1" aria-hidden="true">#</a> <code>-O1</code></h6><ul><li>data-flow analysis</li><li>code motion</li><li>strength reduction and test replacement</li><li>split-lifetime analysis</li><li>instruction scheduling</li></ul><h6 id="o2" tabindex="-1"><a class="header-anchor" href="#o2" aria-hidden="true">#</a> <code>-O2</code></h6><ul><li>Vectorization</li><li>Inlining of intrinsics</li><li>inlining</li><li>constant propagation</li><li>forward substitution</li><li>routine attribute propagation</li><li>variable address-taken analysis</li><li>dead static function elimination</li><li>removal of unreferenced variables</li></ul><h6 id="o3" tabindex="-1"><a class="header-anchor" href="#o3" aria-hidden="true">#</a> <code>-O3</code></h6><ul><li>Fusion</li><li>Block-Unroll-and-Jam</li><li>collapsing <code>if</code> statements</li></ul><h6 id="fast" tabindex="-1"><a class="header-anchor" href="#fast" aria-hidden="true">#</a> <code>-fast</code></h6><ul><li>interprocedural optimization between files</li><li>optimization of floating-point divides that give slightly less precise results than full IEEE division</li><li>link all libraries statically</li><li>generate instructions for the highest instruction set available</li></ul><h5 id="question-2" tabindex="-1"><a class="header-anchor" href="#question-2" aria-hidden="true">#</a> Question 2</h5><p>请简述任务一中循环展开带来的好处。</p><h5 id="answer-2" tabindex="-1"><a class="header-anchor" href="#answer-2" aria-hidden="true">#</a> Answer 2</h5><ul><li>可以减少循环变量的比较次数和分支跳转次数</li><li>减少数据依赖, 增加并发, 充分利用 CPU 流水线</li></ul>',15);function x(w,g){const d=l("ExternalLinkIcon");return r(),n("div",null,[c,t("p",null,[e("请参考 "),t("a",h,[e("ICC 手册"),o(d)]),e(" 并简述参数 ("),u,e(", "),f,e(", "),p,e(", "),m,e(", "),_,e(") 分别进行了哪些编译优化。每种参数罗列几个优化技术即可。")]),b])}const O=i(s,[["render",x],["__file","index.html.vue"]]);export{O as default};
