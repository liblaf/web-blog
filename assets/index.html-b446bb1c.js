const e=JSON.parse('{"key":"v-e997ede4","path":"/reading/face-model/2023/01/16/learning-a-model-of-facial-shape-and-expression-from-4d-scans/","title":"Learning a model of facial shape and expression from 4D scans","lang":"en-US","frontmatter":{"lastUpdated":true,"contributors":true,"editLink":true,"category":["Reading Notes"],"tag":["Face Model"],"isOriginal":true,"date":"2023-01-16T00:00:00.000Z","permalinkPattern":"reading/face-model/:year/:month/:day/:slug","title":"Learning a model of facial shape and expression from 4D scans","description":"[PDF] games-cn.org 3. Model formulation FLAME is described by a function: — coefficients describing shape — coefficients describing pose — coefficients describing expression — template mesh in the “zero pose” — “zero pose” — shape blendshape function to account for identity related shape variation — corrective pose blendshapes to correct pose deformations that cannot be explained solely by LBS — expression blendshapes that capture facial expressions — A standard skinning function is applied to rotate the vertices of around joints , linearly smoothed by blendweights","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/reading/face-model/2023/01/16/learning-a-model-of-facial-shape-and-expression-from-4d-scans/"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Learning a model of facial shape and expression from 4D scans"}],["meta",{"property":"og:description","content":"[PDF] games-cn.org 3. Model formulation FLAME is described by a function: — coefficients describing shape — coefficients describing pose — coefficients describing expression — template mesh in the “zero pose” — “zero pose” — shape blendshape function to account for identity related shape variation — corrective pose blendshapes to correct pose deformations that cannot be explained solely by LBS — expression blendshapes that capture facial expressions — A standard skinning function is applied to rotate the vertices of around joints , linearly smoothed by blendweights"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-24T05:36:48.000Z"}],["meta",{"property":"article:tag","content":"Face Model"}],["meta",{"property":"article:published_time","content":"2023-01-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-24T05:36:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Learning a model of facial shape and expression from 4D scans\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-24T05:36:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"3. Model formulation","slug":"_3-model-formulation","link":"#_3-model-formulation","children":[{"level":4,"title":"Shape blendshapes","slug":"shape-blendshapes","link":"#shape-blendshapes","children":[]},{"level":4,"title":"Pose blendshapes","slug":"pose-blendshapes","link":"#pose-blendshapes","children":[]},{"level":4,"title":"Expression blendshapes","slug":"expression-blendshapes","link":"#expression-blendshapes","children":[]},{"level":4,"title":"Template shape","slug":"template-shape","link":"#template-shape","children":[]}]},{"level":2,"title":"4. Temporal registration","slug":"_4-temporal-registration","link":"#_4-temporal-registration","children":[{"level":3,"title":"4.1. Initial model","slug":"_4-1-initial-model","link":"#_4-1-initial-model","children":[{"level":4,"title":"Shape","slug":"shape","link":"#shape","children":[]},{"level":4,"title":"Pose","slug":"pose","link":"#pose","children":[]},{"level":4,"title":"Expression","slug":"expression","link":"#expression","children":[]}]},{"level":3,"title":"4.2. Single-frame registration","slug":"_4-2-single-frame-registration","link":"#_4-2-single-frame-registration","children":[{"level":4,"title":"Model-only","slug":"model-only","link":"#model-only","children":[]},{"level":4,"title":"Coupled","slug":"coupled","link":"#coupled","children":[]},{"level":4,"title":"Texture-based","slug":"texture-based","link":"#texture-based","children":[]}]},{"level":3,"title":"4.3. Sequential registration","slug":"_4-3-sequential-registration","link":"#_4-3-sequential-registration","children":[{"level":4,"title":"Personalization","slug":"personalization","link":"#personalization","children":[]},{"level":4,"title":"Sequence fitting","slug":"sequence-fitting","link":"#sequence-fitting","children":[]}]}]},{"level":2,"title":"6. Model training","slug":"_6-model-training","link":"#_6-model-training","children":[{"level":3,"title":"6.1. Pose parameter training","slug":"_6-1-pose-parameter-training","link":"#_6-1-pose-parameter-training","children":[]},{"level":3,"title":"6.2. Expression parameter training","slug":"_6-2-expression-parameter-training","link":"#_6-2-expression-parameter-training","children":[]},{"level":3,"title":"6.3. Shape parameter training","slug":"_6-3-shape-parameter-training","link":"#_6-3-shape-parameter-training","children":[]},{"level":3,"title":"6.4. Optimization structure","slug":"_6-4-optimization-structure","link":"#_6-4-optimization-structure","children":[]}]}],"git":{"createdTime":1677217008000,"updatedTime":1677217008000,"contributors":[{"name":"Qin Li","email":"liblaf@outlook.com","commits":1}]},"readingTime":{"minutes":5.57,"words":1670},"filePathRelative":"reading/face-model/2023-01-16-learning-a-model-of-facial-shape-and-expression-from-4d-scans.md","localizedDate":"January 16, 2023","excerpt":"<ul>\\n<li><a href=\\"https://slides.games-cn.org/pdf/GAMES201727%E6%9D%8E%E5%A4%A9%E9%87%8E.pdf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">[PDF] games-cn.org</a></li>\\n</ul>\\n<h2> 3. Model formulation</h2>\\n<p>FLAME is described by a function:</p>\\n<ul>\\n<li> — coefficients describing shape</li>\\n<li> — coefficients describing pose</li>\\n<li> — coefficients describing expression</li>\\n<li> — template mesh in the “zero pose” </li>\\n<li> — “zero pose”</li>\\n<li> — shape blendshape function to account for identity related shape variation</li>\\n<li> — corrective pose blendshapes to correct pose deformations that cannot be explained solely by LBS</li>\\n<li> — expression blendshapes that capture facial expressions</li>\\n<li> — A standard skinning function is applied to rotate the vertices of  around joints , linearly smoothed by blendweights </li>\\n</ul>","autoDesc":true}');export{e as data};