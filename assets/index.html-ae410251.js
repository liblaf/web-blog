const e=JSON.parse('{"key":"v-12cc4f74","path":"/course-work/csapp/bomb-lab/2022/04/04/phase_4/","title":"Bomb Lab: Phase 4","lang":"en-US","frontmatter":{"lastUpdated":true,"contributors":true,"editLink":true,"category":["Course Work"],"tag":["Computer Organization and Architecture","Bomb Lab"],"isOriginal":true,"date":"2022-04-04T00:00:00.000Z","permalinkPattern":"course-work/csapp/bomb-lab/:year/:month/:day/:slug","title":"Bomb Lab: Phase 4","description":"Assembly 00000000004015a9 &lt;phase_4&gt;: b0: 4015a9:\\t48 83 ec 18 \\tsub $0x18,%rsp 4015ad:\\t48 8d 4c 24 08 \\tlea 0x8(%rsp),%rcx 4015b2:\\t48 8d 54 24 0c \\tlea 0xc(%rsp),%rdx 4015b7:\\t48 8d 35 77 1e 00 00 \\tlea 0x1e77(%rip),%rsi # 403435 &lt;array.3354+0x255&gt; 4015be:\\tb8 00 00 00 00 \\tmov $0x0,%eax 4015c3:\\te8 68 fb ff ff \\tcallq 401130 &lt;__isoc99_sscanf@plt&gt; 4015c8:\\t83 f8 02 \\tcmp $0x2,%eax 4015cb:\\t75 0c \\tjne 4015d9 &lt;phase_4+0x30&gt; 4015cd:\\t8b 44 24 08 \\tmov 0x8(%rsp),%eax 4015d1:\\t83 e8 02 \\tsub $0x2,%eax 4015d4:\\t83 f8 02 \\tcmp $0x2,%eax 4015d7:\\t76 05 \\tjbe 4015de &lt;phase_4+0x35&gt; b1: 4015d9:\\te8 7e 05 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; b2: 4015de:\\t8b 74 24 08 \\tmov 0x8(%rsp),%esi 4015e2:\\tbf 09 00 00 00 \\tmov $0x9,%edi 4015e7:\\te8 85 ff ff ff \\tcallq 401571 &lt;func4&gt; 4015ec:\\t3b 44 24 0c \\tcmp 0xc(%rsp),%eax 4015f0:\\t74 05 \\tje 4015f7 &lt;phase_4+0x4e&gt; 4015f2:\\te8 65 05 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; b3: 4015f7:\\t48 83 c4 18 \\tadd $0x18,%rsp 4015fb:\\tc3 \\tretq","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/course-work/csapp/bomb-lab/2022/04/04/phase_4/"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Bomb Lab: Phase 4"}],["meta",{"property":"og:description","content":"Assembly 00000000004015a9 &lt;phase_4&gt;: b0: 4015a9:\\t48 83 ec 18 \\tsub $0x18,%rsp 4015ad:\\t48 8d 4c 24 08 \\tlea 0x8(%rsp),%rcx 4015b2:\\t48 8d 54 24 0c \\tlea 0xc(%rsp),%rdx 4015b7:\\t48 8d 35 77 1e 00 00 \\tlea 0x1e77(%rip),%rsi # 403435 &lt;array.3354+0x255&gt; 4015be:\\tb8 00 00 00 00 \\tmov $0x0,%eax 4015c3:\\te8 68 fb ff ff \\tcallq 401130 &lt;__isoc99_sscanf@plt&gt; 4015c8:\\t83 f8 02 \\tcmp $0x2,%eax 4015cb:\\t75 0c \\tjne 4015d9 &lt;phase_4+0x30&gt; 4015cd:\\t8b 44 24 08 \\tmov 0x8(%rsp),%eax 4015d1:\\t83 e8 02 \\tsub $0x2,%eax 4015d4:\\t83 f8 02 \\tcmp $0x2,%eax 4015d7:\\t76 05 \\tjbe 4015de &lt;phase_4+0x35&gt; b1: 4015d9:\\te8 7e 05 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; b2: 4015de:\\t8b 74 24 08 \\tmov 0x8(%rsp),%esi 4015e2:\\tbf 09 00 00 00 \\tmov $0x9,%edi 4015e7:\\te8 85 ff ff ff \\tcallq 401571 &lt;func4&gt; 4015ec:\\t3b 44 24 0c \\tcmp 0xc(%rsp),%eax 4015f0:\\t74 05 \\tje 4015f7 &lt;phase_4+0x4e&gt; 4015f2:\\te8 65 05 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; b3: 4015f7:\\t48 83 c4 18 \\tadd $0x18,%rsp 4015fb:\\tc3 \\tretq"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-24T05:36:48.000Z"}],["meta",{"property":"article:tag","content":"Computer Organization and Architecture"}],["meta",{"property":"article:tag","content":"Bomb Lab"}],["meta",{"property":"article:published_time","content":"2022-04-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-24T05:36:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bomb Lab: Phase 4\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-24T05:36:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Assembly","slug":"assembly","link":"#assembly","children":[]},{"level":2,"title":"Hack","slug":"hack","link":"#hack","children":[]},{"level":2,"title":"翻译为 C","slug":"翻译为-c","link":"#翻译为-c","children":[]},{"level":2,"title":"Optimize","slug":"optimize","link":"#optimize","children":[]},{"level":2,"title":"Hack","slug":"hack-1","link":"#hack-1","children":[]},{"level":2,"title":"Solution","slug":"solution","link":"#solution","children":[]}],"git":{"createdTime":1677217008000,"updatedTime":1677217008000,"contributors":[{"name":"Qin Li","email":"liblaf@outlook.com","commits":1}]},"readingTime":{"minutes":1.8,"words":541},"filePathRelative":"course-work/csapp/bomb-lab/2022-04-04-phase_4.md","localizedDate":"April 4, 2022","excerpt":"<h2> Assembly</h2>\\n<div class=\\"language-assembly line-numbers-mode\\" data-ext=\\"assembly\\"><pre class=\\"language-assembly\\"><code>00000000004015a9 &lt;phase_4&gt;:\\nb0:\\n  4015a9:\\t48 83 ec 18          \\tsub    $0x18,%rsp\\n  4015ad:\\t48 8d 4c 24 08       \\tlea    0x8(%rsp),%rcx\\n  4015b2:\\t48 8d 54 24 0c       \\tlea    0xc(%rsp),%rdx\\n  4015b7:\\t48 8d 35 77 1e 00 00 \\tlea    0x1e77(%rip),%rsi        # 403435 &lt;array.3354+0x255&gt;\\n  4015be:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\n  4015c3:\\te8 68 fb ff ff       \\tcallq  401130 &lt;__isoc99_sscanf@plt&gt;\\n  4015c8:\\t83 f8 02             \\tcmp    $0x2,%eax\\n  4015cb:\\t75 0c                \\tjne    4015d9 &lt;phase_4+0x30&gt;\\n  4015cd:\\t8b 44 24 08          \\tmov    0x8(%rsp),%eax\\n  4015d1:\\t83 e8 02             \\tsub    $0x2,%eax\\n  4015d4:\\t83 f8 02             \\tcmp    $0x2,%eax\\n  4015d7:\\t76 05                \\tjbe    4015de &lt;phase_4+0x35&gt;\\nb1:\\n  4015d9:\\te8 7e 05 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\nb2:\\n  4015de:\\t8b 74 24 08          \\tmov    0x8(%rsp),%esi\\n  4015e2:\\tbf 09 00 00 00       \\tmov    $0x9,%edi\\n  4015e7:\\te8 85 ff ff ff       \\tcallq  401571 &lt;func4&gt;\\n  4015ec:\\t3b 44 24 0c          \\tcmp    0xc(%rsp),%eax\\n  4015f0:\\t74 05                \\tje     4015f7 &lt;phase_4+0x4e&gt;\\n  4015f2:\\te8 65 05 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\nb3:\\n  4015f7:\\t48 83 c4 18          \\tadd    $0x18,%rsp\\n  4015fb:\\tc3                   \\tretq\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
