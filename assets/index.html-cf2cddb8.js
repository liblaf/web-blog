import{_ as a,X as p,Y as e,$ as t,a1 as n,E as o}from"./framework-9435e890.js";const c={},l=n(`<h2 id="assembly" tabindex="-1"><a class="header-anchor" href="#assembly" aria-hidden="true">#</a> Assembly</h2><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>0000000000401641 &lt;phase_6&gt;:
b0:
  401641:	41 56                	push   %r14
  401643:	41 55                	push   %r13
  401645:	41 54                	push   %r12
  401647:	55                   	push   %rbp
  401648:	53                   	push   %rbx
  401649:	48 83 ec 50          	sub    $0x50,%rsp
  40164d:	49 89 e5             	mov    %rsp,%r13
  401650:	48 89 e6             	mov    %rsp,%rsi
  401653:	e8 40 05 00 00       	callq  401b98 &lt;read_six_numbers&gt;
  401658:	49 89 e6             	mov    %rsp,%r14
  40165b:	41 bc 00 00 00 00    	mov    $0x0,%r12d
b1:
  401661:	4c 89 ed             	mov    %r13,%rbp
  401664:	41 8b 45 00          	mov    0x0(%r13),%eax
  401668:	83 e8 01             	sub    $0x1,%eax
  40166b:	83 f8 05             	cmp    $0x5,%eax
  40166e:	76 05                	jbe    401675 &lt;phase_6+0x34&gt;
b2:
  401670:	e8 e7 04 00 00       	callq  401b5c &lt;explode_bomb&gt;
b3:
  401675:	41 83 c4 01          	add    $0x1,%r12d
  401679:	41 83 fc 06          	cmp    $0x6,%r12d
  40167d:	74 21                	je     4016a0 &lt;phase_6+0x5f&gt;
b4:
  40167f:	44 89 e3             	mov    %r12d,%ebx
b5:
  401682:	48 63 c3             	movslq %ebx,%rax
  401685:	8b 04 84             	mov    (%rsp,%rax,4),%eax
  401688:	39 45 00             	cmp    %eax,0x0(%rbp)
  40168b:	75 05                	jne    401692 &lt;phase_6+0x51&gt;
b6:
  40168d:	e8 ca 04 00 00       	callq  401b5c &lt;explode_bomb&gt;
b7:
  401692:	83 c3 01             	add    $0x1,%ebx
  401695:	83 fb 05             	cmp    $0x5,%ebx
  401698:	7e e8                	jle    401682 &lt;phase_6+0x41&gt;
b8:
  40169a:	49 83 c5 04          	add    $0x4,%r13
  40169e:	eb c1                	jmp    401661 &lt;phase_6+0x20&gt;
b9:
  4016a0:	48 8d 74 24 18       	lea    0x18(%rsp),%rsi
  4016a5:	4c 89 f0             	mov    %r14,%rax
  4016a8:	b9 07 00 00 00       	mov    $0x7,%ecx
b10:
  4016ad:	89 ca                	mov    %ecx,%edx
  4016af:	2b 10                	sub    (%rax),%edx
  4016b1:	89 10                	mov    %edx,(%rax)
  4016b3:	48 83 c0 04          	add    $0x4,%rax
  4016b7:	48 39 f0             	cmp    %rsi,%rax
  4016ba:	75 f1                	jne    4016ad &lt;phase_6+0x6c&gt;
b11:
  4016bc:	be 00 00 00 00       	mov    $0x0,%esi
  4016c1:	eb 23                	jmp    4016e6 &lt;phase_6+0xa5&gt;
b12:
  4016c3:	48 8b 52 08          	mov    0x8(%rdx),%rdx
  4016c7:	83 c0 01             	add    $0x1,%eax
  4016ca:	39 c8                	cmp    %ecx,%eax
  4016cc:	75 f5                	jne    4016c3 &lt;phase_6+0x82&gt;
b13:
  4016ce:	eb 07                	jmp    4016d7 &lt;phase_6+0x96&gt;
b14:
  4016d0:	48 c7 c2 20 53 40 00 	mov    $0x405320,%rdx
b15:
  4016d7:	48 89 54 74 20       	mov    %rdx,0x20(%rsp,%rsi,2)
  4016dc:	48 83 c6 04          	add    $0x4,%rsi
  4016e0:	48 83 fe 18          	cmp    $0x18,%rsi
  4016e4:	74 16                	je     4016fc &lt;phase_6+0xbb&gt;
b16:
  4016e6:	8b 0c 34             	mov    (%rsp,%rsi,1),%ecx
  4016e9:	83 f9 01             	cmp    $0x1,%ecx
  4016ec:	7e e2                	jle    4016d0 &lt;phase_6+0x8f&gt;
b17:
  4016ee:	b8 01 00 00 00       	mov    $0x1,%eax
  4016f3:	48 c7 c2 20 53 40 00 	mov    $0x405320,%rdx
  4016fa:	eb c7                	jmp    4016c3 &lt;phase_6+0x82&gt;
b18:
  4016fc:	48 8b 5c 24 20       	mov    0x20(%rsp),%rbx
  401701:	48 8d 44 24 28       	lea    0x28(%rsp),%rax
  401706:	48 8d 74 24 50       	lea    0x50(%rsp),%rsi
  40170b:	48 89 d9             	mov    %rbx,%rcx
b19:
  40170e:	48 8b 10             	mov    (%rax),%rdx
  401711:	48 89 51 08          	mov    %rdx,0x8(%rcx)
  401715:	48 83 c0 08          	add    $0x8,%rax
  401719:	48 39 f0             	cmp    %rsi,%rax
  40171c:	74 05                	je     401723 &lt;phase_6+0xe2&gt;
b20:
  40171e:	48 89 d1             	mov    %rdx,%rcx
  401721:	eb eb                	jmp    40170e &lt;phase_6+0xcd&gt;
b21:
  401723:	48 c7 42 08 00 00 00 	movq   $0x0,0x8(%rdx)
  40172a:	00
  40172b:	bd 05 00 00 00       	mov    $0x5,%ebp
b22:
  401730:	48 8b 43 08          	mov    0x8(%rbx),%rax
  401734:	8b 00                	mov    (%rax),%eax
  401736:	39 03                	cmp    %eax,(%rbx)
  401738:	7d 05                	jge    40173f &lt;phase_6+0xfe&gt;
b23:
  40173a:	e8 1d 04 00 00       	callq  401b5c &lt;explode_bomb&gt;
b24:
  40173f:	48 8b 5b 08          	mov    0x8(%rbx),%rbx
  401743:	83 ed 01             	sub    $0x1,%ebp
  401746:	75 e8                	jne    401730 &lt;phase_6+0xef&gt;
b25:
  401748:	48 83 c4 50          	add    $0x50,%rsp
  40174c:	5b                   	pop    %rbx
  40174d:	5d                   	pop    %rbp
  40174e:	41 5c                	pop    %r12
  401750:	41 5d                	pop    %r13
  401752:	41 5e                	pop    %r14
  401754:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c" aria-hidden="true">#</a> 翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_6</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  rsp <span class="token operator">-=</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span><span class="token operator">*</span> r13 <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  <span class="token keyword">int</span><span class="token operator">*</span> rsi <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  <span class="token function">read_six_numbers</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span><span class="token operator">*</span> r14 <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  <span class="token keyword">int</span> r12 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token keyword">int</span><span class="token operator">*</span> rbp <span class="token operator">=</span> r13<span class="token punctuation">;</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token operator">*</span>r13<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span>rax <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
b2<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b3<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>r12 <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b9<span class="token punctuation">;</span>
b4<span class="token operator">:</span>
  <span class="token keyword">int</span> rbx <span class="token operator">=</span> r12<span class="token punctuation">;</span>
b5<span class="token operator">:</span>
  rax <span class="token operator">=</span> rsp<span class="token punctuation">[</span>rbx<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbp <span class="token operator">!=</span> rax<span class="token punctuation">)</span> <span class="token keyword">goto</span> b7<span class="token punctuation">;</span>
b6<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b7<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>rbx <span class="token operator">&lt;=</span> <span class="token number">0x5</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b5<span class="token punctuation">;</span>
b8<span class="token operator">:</span>
  r13 <span class="token operator">+=</span> <span class="token number">0x4</span><span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
b9<span class="token operator">:</span>
  rsi <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x18</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> r14<span class="token punctuation">;</span>
  <span class="token keyword">int</span> rcx <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
b10<span class="token operator">:</span>
  <span class="token keyword">int</span> rdx <span class="token operator">=</span> rcx<span class="token punctuation">;</span>
  rdx <span class="token operator">-=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
  <span class="token operator">*</span>rax <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  rax <span class="token operator">+=</span> <span class="token number">0x4</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> rsi<span class="token punctuation">)</span> <span class="token keyword">goto</span> b10<span class="token punctuation">;</span>
b11<span class="token operator">:</span>
  <span class="token keyword">int</span> rsi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b16<span class="token punctuation">;</span>
b12<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rdx <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>rax <span class="token operator">!=</span> rcx<span class="token punctuation">)</span> <span class="token keyword">goto</span> b12<span class="token punctuation">;</span>
b13<span class="token operator">:</span>
  <span class="token keyword">goto</span> b15<span class="token punctuation">;</span>
b14<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
b15<span class="token operator">:</span>
  <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> rsi <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">0x20</span><span class="token punctuation">)</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  rsi <span class="token operator">+=</span> <span class="token number">0x4</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsi <span class="token operator">==</span> <span class="token number">0x18</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b18<span class="token punctuation">;</span>
b16<span class="token operator">:</span>
  <span class="token keyword">int</span> rcx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> rsi <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rcx <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b14<span class="token punctuation">;</span>
b17<span class="token operator">:</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b12<span class="token punctuation">;</span>
b18<span class="token operator">:</span>
  rbx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x28</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
  rcx <span class="token operator">=</span> rbx<span class="token punctuation">;</span>
b19<span class="token operator">:</span>
  rdx <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
  <span class="token operator">*</span><span class="token punctuation">(</span>rcx <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  rax <span class="token operator">+=</span> <span class="token number">0x8</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsi<span class="token punctuation">)</span> <span class="token keyword">goto</span> b21<span class="token punctuation">;</span>
b20<span class="token operator">:</span>
  rcx <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  <span class="token keyword">goto</span> b19<span class="token punctuation">;</span>
b21<span class="token operator">:</span>
  <span class="token operator">*</span><span class="token punctuation">(</span>rdx <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> rbp <span class="token operator">=</span> <span class="token number">0x5</span><span class="token punctuation">;</span>
b22<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>   <span class="token comment">// 32-bit</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbx <span class="token operator">&gt;=</span> rax<span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b24<span class="token punctuation">;</span>
b23<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b24<span class="token operator">:</span>
  rbx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">+</span> <span class="token number">0x8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span>rbp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b22<span class="token punctuation">;</span>
b25<span class="token operator">:</span>
  rsp <span class="token operator">+=</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state-graph" tabindex="-1"><a class="header-anchor" href="#state-graph" aria-hidden="true">#</a> State Graph</h2>`,5),i=n(`<h2 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize" aria-hidden="true">#</a> Optimize</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_6</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  b0<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    b1<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span>rax <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> b2<span class="token punctuation">;</span>
    b3<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>r12 <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    b4<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      b5<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbp <span class="token operator">==</span> rax<span class="token punctuation">)</span> b6<span class="token punctuation">;</span>
      b7<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>rbx <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    b8<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  b9<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    b10<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> rsi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  b11<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    b16<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rcx <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      b14<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      b17<span class="token punctuation">;</span>
      <span class="token keyword">do</span> <span class="token punctuation">{</span>
        b12<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>rax <span class="token operator">!=</span> rcx<span class="token punctuation">)</span><span class="token punctuation">;</span>
      b13<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    b15<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>rsi <span class="token operator">!=</span> <span class="token number">0x18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  b18<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    b19<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsi<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    b20<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  b21<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    b22<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbx <span class="token operator">&lt;</span> rax<span class="token punctuation">)</span> b23<span class="token punctuation">;</span>
    b24<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>rbp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  b25<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimize-1" tabindex="-1"><a class="header-anchor" href="#optimize-1" aria-hidden="true">#</a> Optimize</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_6</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rsp <span class="token operator">-=</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
  r13 <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  <span class="token function">read_six_numbers</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  r14 <span class="token operator">=</span> rsp<span class="token punctuation">;</span>
  r12 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rbp <span class="token operator">=</span> r13<span class="token punctuation">;</span>
    rax <span class="token operator">=</span> r13<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span>rax <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>r12 <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    rbx <span class="token operator">=</span> r12<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbp <span class="token operator">==</span> rax<span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>rbx <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    r13 <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  rsi <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x18</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> r14<span class="token punctuation">;</span>
  rcx <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    rdx <span class="token operator">=</span> rcx<span class="token punctuation">;</span>
    rdx <span class="token operator">-=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
    <span class="token operator">*</span>rax <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
    rax <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>rax <span class="token operator">!=</span> rsi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    rcx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> rsi <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rcx <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      rax <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
      <span class="token keyword">do</span> <span class="token punctuation">{</span>
        rdx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rdx <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">++</span>rax <span class="token operator">!=</span> rcx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> rsi <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">0x20</span><span class="token punctuation">)</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
    rsi <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>rsi <span class="token operator">!=</span> <span class="token number">0x18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rbx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rsp <span class="token operator">+</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x28</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
  rcx <span class="token operator">=</span> rbx<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rdx <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
    <span class="token operator">*</span><span class="token punctuation">(</span>rcx <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
    rax <span class="token operator">+=</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsi<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    rcx <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token operator">*</span><span class="token punctuation">(</span>rdx <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  rbp <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    rax <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rax <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>rbx <span class="token operator">&lt;</span> rax<span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rbx <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span>rbx <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>rbp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rsp <span class="token operator">+=</span> <span class="token number">0x50</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hack" tabindex="-1"><a class="header-anchor" href="#hack" aria-hidden="true">#</a> Hack</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(gdb) x/16xg 0x405320
0x405320 &lt;node1&gt;:       0x00000001000002f5      0x0000000000000000
0x405330 &lt;node2&gt;:       0x00000002000002c7      0x0000000000405340
0x405340 &lt;node3&gt;:       0x0000000300000374      0x0000000000405350
0x405350 &lt;node4&gt;:       0x000000040000029a      0x0000000000405360
0x405360 &lt;node5&gt;:       0x00000005000002c2      0x0000000000405200
0x405370:       0x0000000000000000      0x0000000000000000
0x405380 &lt;completed.7098&gt;:      0x0000000000000000      0x0000000000000000
0x405390:       0x0000000000000000      0x0000000000000000
(gdb) x/32xw 0x405320
0x405320 &lt;node1&gt;:       0x000002f5      0x00000001      0x00000000      0x00000000
0x405330 &lt;node2&gt;:       0x000002c7      0x00000002      0x00405340      0x00000000
0x405340 &lt;node3&gt;:       0x00000374      0x00000003      0x00405350      0x00000000
0x405350 &lt;node4&gt;:       0x0000029a      0x00000004      0x00405360      0x00000000
0x405360 &lt;node5&gt;:       0x000002c2      0x00000005      0x00405200      0x00000000
0x405370:       0x00000000      0x00000000      0x00000000      0x00000000
0x405380 &lt;completed.7098&gt;:      0x00000000      0x00000000      0x00000000      0x00000000
0x405390:       0x00000000      0x00000000      0x00000000      0x00000000
(gdb) x/4xg 0x405200
0x405200 &lt;node6&gt;:       0x00000006000000a1      0x0000000000000000
0x405210 &lt;user_password&gt;:       0x64496d4a50745575      0x4c75456b5a5a4744
(gdb) x/8xw 0x405200
0x405200 &lt;node6&gt;:       0x000000a1      0x00000006      0x00405320      0x00000000
0x405210 &lt;user_password&gt;:       0x50745575      0x64496d4a      0x5a5a4744      0x4c75456b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Address</th><th>a</th><th>b</th><th>next</th></tr></thead><tbody><tr><td><code>0x405320 &lt;node1&gt;</code></td><td><code>0x2f5</code></td><td><code>1</code></td><td><code>0x0000000000405330 &lt;node2&gt;</code></td></tr><tr><td><code>0x405330 &lt;node2&gt;</code></td><td><code>0x2c7</code></td><td><code>2</code></td><td><code>0x0000000000405340 &lt;node3&gt;</code></td></tr><tr><td><code>0x405340 &lt;node3&gt;</code></td><td><code>0x374</code></td><td><code>3</code></td><td><code>0x0000000000405350 &lt;node4&gt;</code></td></tr><tr><td><code>0x405350 &lt;node4&gt;</code></td><td><code>0x29a</code></td><td><code>4</code></td><td><code>0x0000000000405360 &lt;node5&gt;</code></td></tr><tr><td><code>0x405360 &lt;node5&gt;</code></td><td><code>0x2c2</code></td><td><code>5</code></td><td><code>0x0000000000405200 &lt;node6&gt;</code></td></tr><tr><td><code>0x405200 &lt;node6&gt;</code></td><td><code>0x0a1</code></td><td><code>0</code></td><td><code>0x0000000000000000 &lt;NULL&gt;</code></td></tr></tbody></table><h2 id="optimize-2" tabindex="-1"><a class="header-anchor" href="#optimize-2" aria-hidden="true">#</a> Optimize</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">phase_6</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> rsp<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>            <span class="token comment">// rsp + 0x00 -- rsp + 0x18</span>
  <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rsp1<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// rsp + 0x20 -- rsp + 0x50</span>
  <span class="token function">read_six_numbers</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> r12 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> r12 <span class="token operator">!=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>r12<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span>r12<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rbx <span class="token operator">=</span> r12<span class="token punctuation">;</span> rbx <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>rbx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span>r12<span class="token punctuation">]</span> <span class="token operator">==</span> rsp<span class="token punctuation">[</span>rbx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> rax <span class="token operator">=</span> rsp<span class="token punctuation">;</span> rax <span class="token operator">!=</span> rsp <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> <span class="token operator">*</span>rax <span class="token operator">=</span> <span class="token number">7</span> <span class="token operator">-</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rsi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> rsi <span class="token operator">!=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rsi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> rax <span class="token operator">&lt;</span> rsp<span class="token punctuation">[</span>rsi<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> rdx <span class="token operator">=</span> rdx<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    rsp1<span class="token punctuation">[</span>rsi<span class="token punctuation">]</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rcx <span class="token operator">=</span> rsp1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span><span class="token operator">*</span> rax <span class="token operator">=</span> rsp1<span class="token punctuation">;</span> rax <span class="token operator">!=</span> rsp1 <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rcx<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
    rcx <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  rsp1<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rbx <span class="token operator">=</span> rsp1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rbp <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> rbp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>rbp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rbx<span class="token operator">-&gt;</span>a <span class="token operator">&lt;</span> rbx<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>a<span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rbx <span class="token operator">=</span> rbx<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="analysis" tabindex="-1"><a class="header-anchor" href="#analysis" aria-hidden="true">#</a> Analysis</h2><p>从地址中可以分析出, <code>phase_6</code> 使用到了结构体, 猜想其结构如 <code>struct Node</code> 所示, 表示链表.</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>  <span class="token function">read_six_numbers</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不难发现, <code>phase_6</code> 需要输入 6 个 <code>int</code>, 记为 <code>rsp[i]</code>.</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> r12 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> r12 <span class="token operator">!=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>r12<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span>r12<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rbx <span class="token operator">=</span> r12<span class="token punctuation">;</span> rbx <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>rbx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span>r12<span class="token punctuation">]</span> <span class="token operator">==</span> rsp<span class="token punctuation">[</span>rbx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查输入的 6 个数均 <code>&lt; 7</code>, 且不重复.</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> rax <span class="token operator">=</span> rsp<span class="token punctuation">;</span> rax <span class="token operator">!=</span> rsp <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> <span class="token operator">*</span>rax <span class="token operator">=</span> <span class="token number">7</span> <span class="token operator">-</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将输入的 6 个数用 <code>7</code> 减去, 得到新的 6 个数 <code>rsp[i] = 7 - rsp[i]</code>.</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rsi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> rsi <span class="token operator">!=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rsi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rdx <span class="token operator">=</span> <span class="token number">0x405320</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> rax <span class="token operator">&lt;</span> rsp<span class="token punctuation">[</span>rsi<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> rdx <span class="token operator">=</span> rdx<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    rsp1<span class="token punctuation">[</span>rsi<span class="token punctuation">]</span> <span class="token operator">=</span> rdx<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将链表的第 <code>rsp[i]</code> 个结点的指针存入 <code>rsp1</code> 内.</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>  <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rcx <span class="token operator">=</span> rsp1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span><span class="token operator">*</span> rax <span class="token operator">=</span> rsp1<span class="token punctuation">;</span> rax <span class="token operator">!=</span> rsp1 <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>rax<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rcx<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
    rcx <span class="token operator">=</span> <span class="token operator">*</span>rax<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  rsp1<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对链表进行重排序, 按照 <code>rsp[i]</code> 指定的顺序排序.</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>  <span class="token keyword">int</span> rbp <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token operator">*</span> rbx <span class="token operator">=</span> rsp1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> rbp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>rbp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rbx<span class="token operator">-&gt;</span>a <span class="token operator">&lt;</span> rbx<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>a<span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rbx <span class="token operator">=</span> rbx<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查排序后的链表是否满足非升序.</p><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><p>基于前文 Hack 中得到的数据, 我们可以给出初始时列表元素的值为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[0x2f5, 0x2c7, 0x374, 0x29a, 0x2c2, 0x0a1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为保证列表按非升序排列, 正确的排列为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3 1 2 5 4 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>又因为过程中进行了 <code>rsp[i] = 7 - rsp[i]</code> 的变换, 因此正确的输入为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4 6 5 2 3 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30);function r(u,d){const s=o("Mermaid");return p(),e("div",null,[l,t(s,{id:"mermaid-11",code:"eJxdks1ugzAQhO99iu21ERK7IQSsklNfBCpURWqlCqKIx8/AjokdLmg89v58u/Otv41f1/5n6v+Ku70JvqGUorjIoK7U1THgP/WLfHZyyhwLMv7Oo58Zb7s6umqDHA6TmnSd1JlTpW8rP2P0k6tzkI9p+Jf3TpA9s+r0cc3rrs4MtSUe0qLpNOnbJmu4pSrZZcRRhrWCrZD5+uJpGk4JRtkrGncNUiiHMb7ZzO6CcBKDgDSyJpxdk4GiEZSzki0XbV7MjJASkQI6sq9M4oijA9jJfaJSroVGTC01QRmaX5tCCU8w0QO0ZDkiLkawuEHMYERhqBBDX+SSDH03M05GTlZRk5OBNfbVF4eT3D2sxRbhAd1DpEE="}),i])}const v=a(c,[["render",r],["__file","index.html.vue"]]);export{v as default};
