const t=JSON.parse('{"key":"v-12cc4ff0","path":"/course-work/csapp/bomb-lab/2022/04/04/phase_2/","title":"Bomb Lab: Phase 2","lang":"en-US","frontmatter":{"lastUpdated":true,"contributors":true,"editLink":true,"category":["Course Work"],"tag":["Computer Organization and Architecture","Bomb Lab"],"isOriginal":true,"date":"2022-04-04T00:00:00.000Z","permalinkPattern":"course-work/csapp/bomb-lab/:year/:month/:day/:slug","title":"Bomb Lab: Phase 2","description":"Assembly 000000000040145e &lt;phase_2&gt;: b0: 40145e:\\t55 \\tpush %rbp 40145f:\\t53 \\tpush %rbx 401460:\\t48 83 ec 28 \\tsub $0x28,%rsp 401464:\\t48 89 e6 \\tmov %rsp,%rsi 401467:\\te8 2c 07 00 00 \\tcallq 401b98 &lt;read_six_numbers&gt; 40146c:\\t83 3c 24 00 \\tcmpl $0x0,(%rsp) 401470:\\t75 07 \\tjne 401479 &lt;phase_2+0x1b&gt; 401472:\\t83 7c 24 04 01 \\tcmpl $0x1,0x4(%rsp) 401477:\\t74 23 \\tje 40149c &lt;phase_2+0x3e&gt; b1: 401479:\\te8 de 06 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; 40147e:\\t66 90 \\txchg %ax,%ax 401480:\\teb 1a \\tjmp 40149c &lt;phase_2+0x3e&gt; b2: 401482:\\t8b 43 f8 \\tmov -0x8(%rbx),%eax 401485:\\t03 43 fc \\tadd -0x4(%rbx),%eax 401488:\\t39 03 \\tcmp %eax,(%rbx) 40148a:\\t74 05 \\tje 401491 &lt;phase_2+0x33&gt; 40148c:\\te8 cb 06 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; b3: 401491:\\t48 83 c3 04 \\tadd $0x4,%rbx 401495:\\t48 39 eb \\tcmp %rbp,%rbx 401498:\\t75 e8 \\tjne 401482 &lt;phase_2+0x24&gt; 40149a:\\teb 0e \\tjmp 4014aa &lt;phase_2+0x4c&gt; b4: 40149c:\\t48 89 e5 \\tmov %rsp,%rbp 40149f:\\t48 8d 5c 24 08 \\tlea 0x8(%rsp),%rbx 4014a4:\\t48 83 c5 18 \\tadd $0x18,%rbp 4014a8:\\teb d8 \\tjmp 401482 &lt;phase_2+0x24&gt; b5: 4014aa:\\t48 83 c4 28 \\tadd $0x28,%rsp 4014ae:\\t5b \\tpop %rbx 4014af:\\t5d \\tpop %rbp 4014b0:\\tc3 \\tretq","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/course-work/csapp/bomb-lab/2022/04/04/phase_2/"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Bomb Lab: Phase 2"}],["meta",{"property":"og:description","content":"Assembly 000000000040145e &lt;phase_2&gt;: b0: 40145e:\\t55 \\tpush %rbp 40145f:\\t53 \\tpush %rbx 401460:\\t48 83 ec 28 \\tsub $0x28,%rsp 401464:\\t48 89 e6 \\tmov %rsp,%rsi 401467:\\te8 2c 07 00 00 \\tcallq 401b98 &lt;read_six_numbers&gt; 40146c:\\t83 3c 24 00 \\tcmpl $0x0,(%rsp) 401470:\\t75 07 \\tjne 401479 &lt;phase_2+0x1b&gt; 401472:\\t83 7c 24 04 01 \\tcmpl $0x1,0x4(%rsp) 401477:\\t74 23 \\tje 40149c &lt;phase_2+0x3e&gt; b1: 401479:\\te8 de 06 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; 40147e:\\t66 90 \\txchg %ax,%ax 401480:\\teb 1a \\tjmp 40149c &lt;phase_2+0x3e&gt; b2: 401482:\\t8b 43 f8 \\tmov -0x8(%rbx),%eax 401485:\\t03 43 fc \\tadd -0x4(%rbx),%eax 401488:\\t39 03 \\tcmp %eax,(%rbx) 40148a:\\t74 05 \\tje 401491 &lt;phase_2+0x33&gt; 40148c:\\te8 cb 06 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; b3: 401491:\\t48 83 c3 04 \\tadd $0x4,%rbx 401495:\\t48 39 eb \\tcmp %rbp,%rbx 401498:\\t75 e8 \\tjne 401482 &lt;phase_2+0x24&gt; 40149a:\\teb 0e \\tjmp 4014aa &lt;phase_2+0x4c&gt; b4: 40149c:\\t48 89 e5 \\tmov %rsp,%rbp 40149f:\\t48 8d 5c 24 08 \\tlea 0x8(%rsp),%rbx 4014a4:\\t48 83 c5 18 \\tadd $0x18,%rbp 4014a8:\\teb d8 \\tjmp 401482 &lt;phase_2+0x24&gt; b5: 4014aa:\\t48 83 c4 28 \\tadd $0x28,%rsp 4014ae:\\t5b \\tpop %rbx 4014af:\\t5d \\tpop %rbp 4014b0:\\tc3 \\tretq"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-24T05:36:48.000Z"}],["meta",{"property":"article:tag","content":"Computer Organization and Architecture"}],["meta",{"property":"article:tag","content":"Bomb Lab"}],["meta",{"property":"article:published_time","content":"2022-04-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-24T05:36:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bomb Lab: Phase 2\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-24T05:36:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Assembly","slug":"assembly","link":"#assembly","children":[]},{"level":2,"title":"翻译为 C","slug":"翻译为-c","link":"#翻译为-c","children":[]},{"level":2,"title":"Optimize","slug":"optimize","link":"#optimize","children":[]},{"level":2,"title":"Solution","slug":"solution","link":"#solution","children":[]}],"git":{"createdTime":1677217008000,"updatedTime":1677217008000,"contributors":[{"name":"Qin Li","email":"liblaf@outlook.com","commits":1}]},"readingTime":{"minutes":1.24,"words":373},"filePathRelative":"course-work/csapp/bomb-lab/2022-04-04-phase_2.md","localizedDate":"April 4, 2022","excerpt":"<h2> Assembly</h2>\\n<div class=\\"language-assembly line-numbers-mode\\" data-ext=\\"assembly\\"><pre class=\\"language-assembly\\"><code>000000000040145e &lt;phase_2&gt;:\\nb0:\\n  40145e:\\t55                   \\tpush   %rbp\\n  40145f:\\t53                   \\tpush   %rbx\\n  401460:\\t48 83 ec 28          \\tsub    $0x28,%rsp\\n  401464:\\t48 89 e6             \\tmov    %rsp,%rsi\\n  401467:\\te8 2c 07 00 00       \\tcallq  401b98 &lt;read_six_numbers&gt;\\n  40146c:\\t83 3c 24 00          \\tcmpl   $0x0,(%rsp)\\n  401470:\\t75 07                \\tjne    401479 &lt;phase_2+0x1b&gt;\\n  401472:\\t83 7c 24 04 01       \\tcmpl   $0x1,0x4(%rsp)\\n  401477:\\t74 23                \\tje     40149c &lt;phase_2+0x3e&gt;\\nb1:\\n  401479:\\te8 de 06 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\n  40147e:\\t66 90                \\txchg   %ax,%ax\\n  401480:\\teb 1a                \\tjmp    40149c &lt;phase_2+0x3e&gt;\\nb2:\\n  401482:\\t8b 43 f8             \\tmov    -0x8(%rbx),%eax\\n  401485:\\t03 43 fc             \\tadd    -0x4(%rbx),%eax\\n  401488:\\t39 03                \\tcmp    %eax,(%rbx)\\n  40148a:\\t74 05                \\tje     401491 &lt;phase_2+0x33&gt;\\n  40148c:\\te8 cb 06 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\nb3:\\n  401491:\\t48 83 c3 04          \\tadd    $0x4,%rbx\\n  401495:\\t48 39 eb             \\tcmp    %rbp,%rbx\\n  401498:\\t75 e8                \\tjne    401482 &lt;phase_2+0x24&gt;\\n  40149a:\\teb 0e                \\tjmp    4014aa &lt;phase_2+0x4c&gt;\\nb4:\\n  40149c:\\t48 89 e5             \\tmov    %rsp,%rbp\\n  40149f:\\t48 8d 5c 24 08       \\tlea    0x8(%rsp),%rbx\\n  4014a4:\\t48 83 c5 18          \\tadd    $0x18,%rbp\\n  4014a8:\\teb d8                \\tjmp    401482 &lt;phase_2+0x24&gt;\\nb5:\\n  4014aa:\\t48 83 c4 28          \\tadd    $0x28,%rsp\\n  4014ae:\\t5b                   \\tpop    %rbx\\n  4014af:\\t5d                   \\tpop    %rbp\\n  4014b0:\\tc3                   \\tretq\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};