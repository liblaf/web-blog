const e=JSON.parse('{"key":"v-787654ac","path":"/course-notes/numerical-analysis/2022/11/08/6-%E9%9D%9E%E7%BA%BF%E6%80%A7%E6%96%B9%E7%A8%8B/","title":"6. 非线性方程","lang":"en-US","frontmatter":{"lastUpdated":true,"contributors":true,"editLink":true,"category":["Course Notes"],"tag":["Numerical Analysis"],"isOriginal":true,"date":"2022-11-08T00:00:00.000Z","permalinkPattern":"course-notes/numerical-analysis/:year/:month/:day/:slug","title":"6. 非线性方程","description":"6.1 对分法 6.1.1 对分法基本思想 定理 6.1 设 在 内连续, 且 , 则在 内至少存在一点 , 使得 . 算法 6.1 给定函数 和求解区间 , 以及精度要求 令 , 计算 和 , 如果 , 则返回数值解 并停止计算; 如果 , 则返回数值解 并停止计算; 如果 , 则输出算法失败信息并停止计算 for do 计算 和 如果 或者 , 则返回数值解 并停止计算; 如果 , 则令 , ; 否则令 , ; end for","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/course-notes/numerical-analysis/2022/11/08/6-%E9%9D%9E%E7%BA%BF%E6%80%A7%E6%96%B9%E7%A8%8B/"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"6. 非线性方程"}],["meta",{"property":"og:description","content":"6.1 对分法 6.1.1 对分法基本思想 定理 6.1 设 在 内连续, 且 , 则在 内至少存在一点 , 使得 . 算法 6.1 给定函数 和求解区间 , 以及精度要求 令 , 计算 和 , 如果 , 则返回数值解 并停止计算; 如果 , 则返回数值解 并停止计算; 如果 , 则输出算法失败信息并停止计算 for do 计算 和 如果 或者 , 则返回数值解 并停止计算; 如果 , 则令 , ; 否则令 , ; end for"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-24T05:36:48.000Z"}],["meta",{"property":"article:tag","content":"Numerical Analysis"}],["meta",{"property":"article:published_time","content":"2022-11-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-24T05:36:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6. 非线性方程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-24T05:36:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"6.1 对分法","slug":"_6-1-对分法","link":"#_6-1-对分法","children":[{"level":3,"title":"6.1.1 对分法基本思想","slug":"_6-1-1-对分法基本思想","link":"#_6-1-1-对分法基本思想","children":[]}]},{"level":2,"title":"6.2 不动点迭代法","slug":"_6-2-不动点迭代法","link":"#_6-2-不动点迭代法","children":[{"level":3,"title":"6.2.1 收敛性分析","slug":"_6-2-1-收敛性分析","link":"#_6-2-1-收敛性分析","children":[]},{"level":3,"title":"6.2.2 收敛阶","slug":"_6-2-2-收敛阶","link":"#_6-2-2-收敛阶","children":[]}]}],"git":{"createdTime":1677217008000,"updatedTime":1677217008000,"contributors":[{"name":"Qin Li","email":"liblaf@outlook.com","commits":1}]},"readingTime":{"minutes":2.52,"words":755},"filePathRelative":"course-notes/numerical-analysis/2022-11-08-6-非线性方程.md","localizedDate":"November 8, 2022","excerpt":"<h2> 6.1 对分法</h2>\\n<h3> 6.1.1 对分法基本思想</h3>\\n<h6> 定理 6.1</h6>\\n<p>设  在  内连续, 且 , 则在  内至少存在一点 , 使得 .</p>\\n<h6> 算法 6.1</h6>\\n<ol>\\n<li>给定函数  和求解区间 , 以及精度要求 </li>\\n<li>令 , </li>\\n<li>计算  和 , 如果 , 则返回数值解  并停止计算; 如果 , 则返回数值解  并停止计算; 如果 , 则输出算法失败信息并停止计算</li>\\n<li><code>for</code>  <code>do</code></li>\\n<li><code>  </code> 计算  和 </li>\\n<li><code>  </code> 如果  或者 , 则返回数值解  并停止计算;</li>\\n<li><code>  </code> 如果 , 则令 , ; 否则令 , ;</li>\\n<li><code>end for</code></li>\\n</ol>","autoDesc":true}');export{e as data};