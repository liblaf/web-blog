const t=JSON.parse('{"key":"v-12cc4fb2","path":"/course-work/csapp/bomb-lab/2022/04/04/phase_3/","title":"Bomb Lab: Phase 3","lang":"en-US","frontmatter":{"lastUpdated":true,"contributors":true,"editLink":true,"category":["Course Work"],"tag":["Computer Organization and Architecture","Bomb Lab"],"isOriginal":true,"date":"2022-04-04T00:00:00.000Z","permalinkPattern":"course-work/csapp/bomb-lab/:year/:month/:day/:slug","title":"Bomb Lab: Phase 3","description":"Assembly 00000000004014b1 &lt;phase_3&gt;: b0: 4014b1:\\t48 83 ec 18 \\tsub $0x18,%rsp 4014b5:\\t48 8d 4c 24 0c \\tlea 0xc(%rsp),%rcx 4014ba:\\t48 8d 54 24 08 \\tlea 0x8(%rsp),%rdx 4014bf:\\t48 8d 35 6f 1f 00 00 \\tlea 0x1f6f(%rip),%rsi # 403435 &lt;array.3354+0x255&gt; 4014c6:\\tb8 00 00 00 00 \\tmov $0x0,%eax 4014cb:\\te8 60 fc ff ff \\tcallq 401130 &lt;__isoc99_sscanf@plt&gt; 4014d0:\\t83 f8 01 \\tcmp $0x1,%eax 4014d3:\\t7f 05 \\tjg 4014da &lt;phase_3+0x29&gt; 4014d5:\\te8 82 06 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; b1: 4014da:\\t83 7c 24 08 07 \\tcmpl $0x7,0x8(%rsp) 4014df:\\t77 6f \\tja 401550 &lt;phase_3+0x9f&gt; 4014e1:\\t8b 54 24 08 \\tmov 0x8(%rsp),%edx 4014e5:\\t48 8d 05 d4 1c 00 00 \\tlea 0x1cd4(%rip),%rax # 4031c0 &lt;_IO_stdin_used+0x1c0&gt; 4014ec:\\t48 63 14 90 \\tmovslq (%rax,%rdx,4),%rdx 4014f0:\\t48 01 d0 \\tadd %rdx,%rax 4014f3:\\tff e0 \\tjmpq *%rax 4014f5:\\tb8 00 00 00 00 \\tmov $0x0,%eax 4014fa:\\teb 05 \\tjmp 401501 &lt;phase_3+0x50&gt; 4014fc:\\tb8 cb 02 00 00 \\tmov $0x2cb,%eax b2: 401501:\\t2d 4c 02 00 00 \\tsub $0x24c,%eax 401506:\\teb 05 \\tjmp 40150d &lt;phase_3+0x5c&gt; 401508:\\tb8 00 00 00 00 \\tmov $0x0,%eax b3: 40150d:\\t05 ba 03 00 00 \\tadd $0x3ba,%eax 401512:\\teb 05 \\tjmp 401519 &lt;phase_3+0x68&gt; 401514:\\tb8 00 00 00 00 \\tmov $0x0,%eax b4: 401519:\\t2d 79 03 00 00 \\tsub $0x379,%eax 40151e:\\teb 05 \\tjmp 401525 &lt;phase_3+0x74&gt; 401520:\\tb8 00 00 00 00 \\tmov $0x0,%eax b5: 401525:\\t05 79 03 00 00 \\tadd $0x379,%eax 40152a:\\teb 05 \\tjmp 401531 &lt;phase_3+0x80&gt; 40152c:\\tb8 00 00 00 00 \\tmov $0x0,%eax b6: 401531:\\t2d 79 03 00 00 \\tsub $0x379,%eax 401536:\\teb 05 \\tjmp 40153d &lt;phase_3+0x8c&gt; 401538:\\tb8 00 00 00 00 \\tmov $0x0,%eax b7: 40153d:\\t05 79 03 00 00 \\tadd $0x379,%eax 401542:\\teb 05 \\tjmp 401549 &lt;phase_3+0x98&gt; 401544:\\tb8 00 00 00 00 \\tmov $0x0,%eax b8: 401549:\\t2d 79 03 00 00 \\tsub $0x379,%eax 40154e:\\teb 0a \\tjmp 40155a &lt;phase_3+0xa9&gt; b9: 401550:\\te8 07 06 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; 401555:\\tb8 00 00 00 00 \\tmov $0x0,%eax b10: 40155a:\\t83 7c 24 08 05 \\tcmpl $0x5,0x8(%rsp) 40155f:\\t7f 06 \\tjg 401567 &lt;phase_3+0xb6&gt; 401561:\\t3b 44 24 0c \\tcmp 0xc(%rsp),%eax 401565:\\t74 05 \\tje 40156c &lt;phase_3+0xbb&gt; b11: 401567:\\te8 f0 05 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; b12: 40156c:\\t48 83 c4 18 \\tadd $0x18,%rsp 401570:\\tc3 \\tretq","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/course-work/csapp/bomb-lab/2022/04/04/phase_3/"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Bomb Lab: Phase 3"}],["meta",{"property":"og:description","content":"Assembly 00000000004014b1 &lt;phase_3&gt;: b0: 4014b1:\\t48 83 ec 18 \\tsub $0x18,%rsp 4014b5:\\t48 8d 4c 24 0c \\tlea 0xc(%rsp),%rcx 4014ba:\\t48 8d 54 24 08 \\tlea 0x8(%rsp),%rdx 4014bf:\\t48 8d 35 6f 1f 00 00 \\tlea 0x1f6f(%rip),%rsi # 403435 &lt;array.3354+0x255&gt; 4014c6:\\tb8 00 00 00 00 \\tmov $0x0,%eax 4014cb:\\te8 60 fc ff ff \\tcallq 401130 &lt;__isoc99_sscanf@plt&gt; 4014d0:\\t83 f8 01 \\tcmp $0x1,%eax 4014d3:\\t7f 05 \\tjg 4014da &lt;phase_3+0x29&gt; 4014d5:\\te8 82 06 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; b1: 4014da:\\t83 7c 24 08 07 \\tcmpl $0x7,0x8(%rsp) 4014df:\\t77 6f \\tja 401550 &lt;phase_3+0x9f&gt; 4014e1:\\t8b 54 24 08 \\tmov 0x8(%rsp),%edx 4014e5:\\t48 8d 05 d4 1c 00 00 \\tlea 0x1cd4(%rip),%rax # 4031c0 &lt;_IO_stdin_used+0x1c0&gt; 4014ec:\\t48 63 14 90 \\tmovslq (%rax,%rdx,4),%rdx 4014f0:\\t48 01 d0 \\tadd %rdx,%rax 4014f3:\\tff e0 \\tjmpq *%rax 4014f5:\\tb8 00 00 00 00 \\tmov $0x0,%eax 4014fa:\\teb 05 \\tjmp 401501 &lt;phase_3+0x50&gt; 4014fc:\\tb8 cb 02 00 00 \\tmov $0x2cb,%eax b2: 401501:\\t2d 4c 02 00 00 \\tsub $0x24c,%eax 401506:\\teb 05 \\tjmp 40150d &lt;phase_3+0x5c&gt; 401508:\\tb8 00 00 00 00 \\tmov $0x0,%eax b3: 40150d:\\t05 ba 03 00 00 \\tadd $0x3ba,%eax 401512:\\teb 05 \\tjmp 401519 &lt;phase_3+0x68&gt; 401514:\\tb8 00 00 00 00 \\tmov $0x0,%eax b4: 401519:\\t2d 79 03 00 00 \\tsub $0x379,%eax 40151e:\\teb 05 \\tjmp 401525 &lt;phase_3+0x74&gt; 401520:\\tb8 00 00 00 00 \\tmov $0x0,%eax b5: 401525:\\t05 79 03 00 00 \\tadd $0x379,%eax 40152a:\\teb 05 \\tjmp 401531 &lt;phase_3+0x80&gt; 40152c:\\tb8 00 00 00 00 \\tmov $0x0,%eax b6: 401531:\\t2d 79 03 00 00 \\tsub $0x379,%eax 401536:\\teb 05 \\tjmp 40153d &lt;phase_3+0x8c&gt; 401538:\\tb8 00 00 00 00 \\tmov $0x0,%eax b7: 40153d:\\t05 79 03 00 00 \\tadd $0x379,%eax 401542:\\teb 05 \\tjmp 401549 &lt;phase_3+0x98&gt; 401544:\\tb8 00 00 00 00 \\tmov $0x0,%eax b8: 401549:\\t2d 79 03 00 00 \\tsub $0x379,%eax 40154e:\\teb 0a \\tjmp 40155a &lt;phase_3+0xa9&gt; b9: 401550:\\te8 07 06 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; 401555:\\tb8 00 00 00 00 \\tmov $0x0,%eax b10: 40155a:\\t83 7c 24 08 05 \\tcmpl $0x5,0x8(%rsp) 40155f:\\t7f 06 \\tjg 401567 &lt;phase_3+0xb6&gt; 401561:\\t3b 44 24 0c \\tcmp 0xc(%rsp),%eax 401565:\\t74 05 \\tje 40156c &lt;phase_3+0xbb&gt; b11: 401567:\\te8 f0 05 00 00 \\tcallq 401b5c &lt;explode_bomb&gt; b12: 40156c:\\t48 83 c4 18 \\tadd $0x18,%rsp 401570:\\tc3 \\tretq"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-24T05:36:48.000Z"}],["meta",{"property":"article:tag","content":"Computer Organization and Architecture"}],["meta",{"property":"article:tag","content":"Bomb Lab"}],["meta",{"property":"article:published_time","content":"2022-04-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-24T05:36:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bomb Lab: Phase 3\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-24T05:36:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Assembly","slug":"assembly","link":"#assembly","children":[]},{"level":2,"title":"翻译为 C","slug":"翻译为-c","link":"#翻译为-c","children":[]},{"level":2,"title":"Hack","slug":"hack","link":"#hack","children":[]},{"level":2,"title":"重新分割 BasicBlock","slug":"重新分割-basicblock","link":"#重新分割-basicblock","children":[]},{"level":2,"title":"重新翻译为 C","slug":"重新翻译为-c","link":"#重新翻译为-c","children":[]},{"level":2,"title":"Reverse analysis","slug":"reverse-analysis","link":"#reverse-analysis","children":[]},{"level":2,"title":"删去无效的跳转点翻译为 C","slug":"删去无效的跳转点翻译为-c","link":"#删去无效的跳转点翻译为-c","children":[]},{"level":2,"title":"跳转图","slug":"跳转图","link":"#跳转图","children":[]},{"level":2,"title":"Solution","slug":"solution","link":"#solution","children":[]}],"git":{"createdTime":1677217008000,"updatedTime":1677217008000,"contributors":[{"name":"Qin Li","email":"liblaf@outlook.com","commits":1}]},"readingTime":{"minutes":6.05,"words":1815},"filePathRelative":"course-work/csapp/bomb-lab/2022-04-04-phase_3.md","localizedDate":"April 4, 2022","excerpt":"<h2> Assembly</h2>\\n<div class=\\"language-assembly line-numbers-mode\\" data-ext=\\"assembly\\"><pre class=\\"language-assembly\\"><code>00000000004014b1 &lt;phase_3&gt;:\\nb0:\\n  4014b1:\\t48 83 ec 18          \\tsub    $0x18,%rsp\\n  4014b5:\\t48 8d 4c 24 0c       \\tlea    0xc(%rsp),%rcx\\n  4014ba:\\t48 8d 54 24 08       \\tlea    0x8(%rsp),%rdx\\n  4014bf:\\t48 8d 35 6f 1f 00 00 \\tlea    0x1f6f(%rip),%rsi        # 403435 &lt;array.3354+0x255&gt;\\n  4014c6:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\n  4014cb:\\te8 60 fc ff ff       \\tcallq  401130 &lt;__isoc99_sscanf@plt&gt;\\n  4014d0:\\t83 f8 01             \\tcmp    $0x1,%eax\\n  4014d3:\\t7f 05                \\tjg     4014da &lt;phase_3+0x29&gt;\\n  4014d5:\\te8 82 06 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\nb1:\\n  4014da:\\t83 7c 24 08 07       \\tcmpl   $0x7,0x8(%rsp)\\n  4014df:\\t77 6f                \\tja     401550 &lt;phase_3+0x9f&gt;\\n  4014e1:\\t8b 54 24 08          \\tmov    0x8(%rsp),%edx\\n  4014e5:\\t48 8d 05 d4 1c 00 00 \\tlea    0x1cd4(%rip),%rax        # 4031c0 &lt;_IO_stdin_used+0x1c0&gt;\\n  4014ec:\\t48 63 14 90          \\tmovslq (%rax,%rdx,4),%rdx\\n  4014f0:\\t48 01 d0             \\tadd    %rdx,%rax\\n  4014f3:\\tff e0                \\tjmpq   *%rax\\n  4014f5:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\n  4014fa:\\teb 05                \\tjmp    401501 &lt;phase_3+0x50&gt;\\n  4014fc:\\tb8 cb 02 00 00       \\tmov    $0x2cb,%eax\\nb2:\\n  401501:\\t2d 4c 02 00 00       \\tsub    $0x24c,%eax\\n  401506:\\teb 05                \\tjmp    40150d &lt;phase_3+0x5c&gt;\\n  401508:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\nb3:\\n  40150d:\\t05 ba 03 00 00       \\tadd    $0x3ba,%eax\\n  401512:\\teb 05                \\tjmp    401519 &lt;phase_3+0x68&gt;\\n  401514:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\nb4:\\n  401519:\\t2d 79 03 00 00       \\tsub    $0x379,%eax\\n  40151e:\\teb 05                \\tjmp    401525 &lt;phase_3+0x74&gt;\\n  401520:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\nb5:\\n  401525:\\t05 79 03 00 00       \\tadd    $0x379,%eax\\n  40152a:\\teb 05                \\tjmp    401531 &lt;phase_3+0x80&gt;\\n  40152c:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\nb6:\\n  401531:\\t2d 79 03 00 00       \\tsub    $0x379,%eax\\n  401536:\\teb 05                \\tjmp    40153d &lt;phase_3+0x8c&gt;\\n  401538:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\nb7:\\n  40153d:\\t05 79 03 00 00       \\tadd    $0x379,%eax\\n  401542:\\teb 05                \\tjmp    401549 &lt;phase_3+0x98&gt;\\n  401544:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\nb8:\\n  401549:\\t2d 79 03 00 00       \\tsub    $0x379,%eax\\n  40154e:\\teb 0a                \\tjmp    40155a &lt;phase_3+0xa9&gt;\\nb9:\\n  401550:\\te8 07 06 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\n  401555:\\tb8 00 00 00 00       \\tmov    $0x0,%eax\\nb10:\\n  40155a:\\t83 7c 24 08 05       \\tcmpl   $0x5,0x8(%rsp)\\n  40155f:\\t7f 06                \\tjg     401567 &lt;phase_3+0xb6&gt;\\n  401561:\\t3b 44 24 0c          \\tcmp    0xc(%rsp),%eax\\n  401565:\\t74 05                \\tje     40156c &lt;phase_3+0xbb&gt;\\nb11:\\n  401567:\\te8 f0 05 00 00       \\tcallq  401b5c &lt;explode_bomb&gt;\\nb12:\\n  40156c:\\t48 83 c4 18          \\tadd    $0x18,%rsp\\n  401570:\\tc3                   \\tretq\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};