import{_ as a,X as e,Y as t,$ as p,a1 as n,E as o}from"./framework-9435e890.js";const c={},i=n(`<h2 id="assembly" tabindex="-1"><a class="header-anchor" href="#assembly" aria-hidden="true">#</a> Assembly</h2><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>00000000004014b1 &lt;phase_3&gt;:
b0:
  4014b1:	48 83 ec 18          	sub    $0x18,%rsp
  4014b5:	48 8d 4c 24 0c       	lea    0xc(%rsp),%rcx
  4014ba:	48 8d 54 24 08       	lea    0x8(%rsp),%rdx
  4014bf:	48 8d 35 6f 1f 00 00 	lea    0x1f6f(%rip),%rsi        # 403435 &lt;array.3354+0x255&gt;
  4014c6:	b8 00 00 00 00       	mov    $0x0,%eax
  4014cb:	e8 60 fc ff ff       	callq  401130 &lt;__isoc99_sscanf@plt&gt;
  4014d0:	83 f8 01             	cmp    $0x1,%eax
  4014d3:	7f 05                	jg     4014da &lt;phase_3+0x29&gt;
  4014d5:	e8 82 06 00 00       	callq  401b5c &lt;explode_bomb&gt;
b1:
  4014da:	83 7c 24 08 07       	cmpl   $0x7,0x8(%rsp)
  4014df:	77 6f                	ja     401550 &lt;phase_3+0x9f&gt;
  4014e1:	8b 54 24 08          	mov    0x8(%rsp),%edx
  4014e5:	48 8d 05 d4 1c 00 00 	lea    0x1cd4(%rip),%rax        # 4031c0 &lt;_IO_stdin_used+0x1c0&gt;
  4014ec:	48 63 14 90          	movslq (%rax,%rdx,4),%rdx
  4014f0:	48 01 d0             	add    %rdx,%rax
  4014f3:	ff e0                	jmpq   *%rax
  4014f5:	b8 00 00 00 00       	mov    $0x0,%eax
  4014fa:	eb 05                	jmp    401501 &lt;phase_3+0x50&gt;
  4014fc:	b8 cb 02 00 00       	mov    $0x2cb,%eax
b2:
  401501:	2d 4c 02 00 00       	sub    $0x24c,%eax
  401506:	eb 05                	jmp    40150d &lt;phase_3+0x5c&gt;
  401508:	b8 00 00 00 00       	mov    $0x0,%eax
b3:
  40150d:	05 ba 03 00 00       	add    $0x3ba,%eax
  401512:	eb 05                	jmp    401519 &lt;phase_3+0x68&gt;
  401514:	b8 00 00 00 00       	mov    $0x0,%eax
b4:
  401519:	2d 79 03 00 00       	sub    $0x379,%eax
  40151e:	eb 05                	jmp    401525 &lt;phase_3+0x74&gt;
  401520:	b8 00 00 00 00       	mov    $0x0,%eax
b5:
  401525:	05 79 03 00 00       	add    $0x379,%eax
  40152a:	eb 05                	jmp    401531 &lt;phase_3+0x80&gt;
  40152c:	b8 00 00 00 00       	mov    $0x0,%eax
b6:
  401531:	2d 79 03 00 00       	sub    $0x379,%eax
  401536:	eb 05                	jmp    40153d &lt;phase_3+0x8c&gt;
  401538:	b8 00 00 00 00       	mov    $0x0,%eax
b7:
  40153d:	05 79 03 00 00       	add    $0x379,%eax
  401542:	eb 05                	jmp    401549 &lt;phase_3+0x98&gt;
  401544:	b8 00 00 00 00       	mov    $0x0,%eax
b8:
  401549:	2d 79 03 00 00       	sub    $0x379,%eax
  40154e:	eb 0a                	jmp    40155a &lt;phase_3+0xa9&gt;
b9:
  401550:	e8 07 06 00 00       	callq  401b5c &lt;explode_bomb&gt;
  401555:	b8 00 00 00 00       	mov    $0x0,%eax
b10:
  40155a:	83 7c 24 08 05       	cmpl   $0x5,0x8(%rsp)
  40155f:	7f 06                	jg     401567 &lt;phase_3+0xb6&gt;
  401561:	3b 44 24 0c          	cmp    0xc(%rsp),%eax
  401565:	74 05                	je     40156c &lt;phase_3+0xbb&gt;
b11:
  401567:	e8 f0 05 00 00       	callq  401b5c &lt;explode_bomb&gt;
b12:
  40156c:	48 83 c4 18          	add    $0x18,%rsp
  401570:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c" aria-hidden="true">#</a> 翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_3</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token keyword">int</span> rsp<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span><span class="token operator">*</span> rcx <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span><span class="token operator">*</span> rdx <span class="token operator">=</span> rsp <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">char</span><span class="token operator">*</span> rsi <span class="token operator">=</span> <span class="token number">0x403435</span><span class="token punctuation">;</span>  <span class="token comment">// 403435 &lt;array.3354+0x255&gt;</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>           <span class="token comment">// 32-bit</span>
  rax <span class="token operator">=</span> <span class="token function">__isoc99_sscanf</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsi<span class="token punctuation">,</span> rdx<span class="token punctuation">,</span> rcx<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b9<span class="token punctuation">;</span>
  <span class="token keyword">int</span> rdx <span class="token operator">=</span> rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>     <span class="token comment">// 32-bit</span>
  <span class="token keyword">int</span><span class="token operator">*</span> rax <span class="token operator">=</span> <span class="token number">0x4031c0</span><span class="token punctuation">;</span>  <span class="token comment">// 4031c0 &lt;_IO_stdin_used+0x1c0&gt;</span>
  rdx <span class="token operator">=</span> rax<span class="token punctuation">[</span>rdx<span class="token punctuation">]</span><span class="token punctuation">;</span>
  rax <span class="token operator">+=</span> rdx<span class="token punctuation">;</span>
  <span class="token function">jmpq</span><span class="token punctuation">(</span>rax<span class="token punctuation">)</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0x2cb</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b2<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x24c</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b3<span class="token operator">:</span>
  rax <span class="token operator">+=</span> <span class="token number">0x3ba</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b4<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b4<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b5<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b5<span class="token operator">:</span>
  rax <span class="token operator">+=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b6<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b7<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b7<span class="token operator">:</span>
  rax <span class="token operator">+=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b8<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b8<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b10<span class="token punctuation">;</span>
b9<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b10<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b11<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsp<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b12<span class="token punctuation">;</span>
b11<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b12<span class="token operator">:</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hack" tabindex="-1"><a class="header-anchor" href="#hack" aria-hidden="true">#</a> Hack</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(gdb) x/s 0x403435
0x403435:       &quot;%d %d&quot;
(gdb) x/8xw 0x4031c0
0x4031c0:       0xffffe33c      0xffffe335      0xffffe348      0xffffe354
0x4031d0:       0xffffe360      0xffffe36c      0xffffe378      0xffffe384
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th><code>i</code></th><th><code>*(0x4031c0 + i * sizeof(int))</code></th><th><code>0x4031c0 + *(0x4031c0 + i * sizeof(int))</code></th><th>BasicBlock</th></tr></thead><tbody><tr><td><code>0</code></td><td><code>0xffffe33c</code></td><td><code>0x004014fc</code></td><td><code>bb0</code></td></tr><tr><td><code>1</code></td><td><code>0xffffe335</code></td><td><code>0x004014f5</code></td><td><code>bb1</code></td></tr><tr><td><code>2</code></td><td><code>0xffffe348</code></td><td><code>0x00401508</code></td><td><code>bb2</code></td></tr><tr><td><code>3</code></td><td><code>0xffffe354</code></td><td><code>0x00401514</code></td><td><code>bb3</code></td></tr><tr><td><code>4</code></td><td><code>0xffffe360</code></td><td><code>0x00401520</code></td><td><code>bb4</code></td></tr><tr><td><code>5</code></td><td><code>0xffffe36c</code></td><td><code>0x0040152c</code></td><td><code>bb5</code></td></tr><tr><td><code>6</code></td><td><code>0xffffe378</code></td><td><code>0x00401538</code></td><td><code>bb6</code></td></tr><tr><td><code>7</code></td><td><code>0xffffe384</code></td><td><code>0x00401544</code></td><td><code>bb7</code></td></tr></tbody></table><h2 id="重新分割-basicblock" tabindex="-1"><a class="header-anchor" href="#重新分割-basicblock" aria-hidden="true">#</a> 重新分割 <code>BasicBlock</code></h2><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>00000000004014b1 &lt;phase_3&gt;:
b0:
  4014b1:	48 83 ec 18          	sub    $0x18,%rsp
  4014b5:	48 8d 4c 24 0c       	lea    0xc(%rsp),%rcx
  4014ba:	48 8d 54 24 08       	lea    0x8(%rsp),%rdx
  4014bf:	48 8d 35 6f 1f 00 00 	lea    0x1f6f(%rip),%rsi        # 403435 &lt;array.3354+0x255&gt;
  4014c6:	b8 00 00 00 00       	mov    $0x0,%eax
  4014cb:	e8 60 fc ff ff       	callq  401130 &lt;__isoc99_sscanf@plt&gt;
  4014d0:	83 f8 01             	cmp    $0x1,%eax
  4014d3:	7f 05                	jg     4014da &lt;phase_3+0x29&gt;
  4014d5:	e8 82 06 00 00       	callq  401b5c &lt;explode_bomb&gt;
b1:
  4014da:	83 7c 24 08 07       	cmpl   $0x7,0x8(%rsp)
  4014df:	77 6f                	ja     401550 &lt;phase_3+0x9f&gt;
  4014e1:	8b 54 24 08          	mov    0x8(%rsp),%edx
  4014e5:	48 8d 05 d4 1c 00 00 	lea    0x1cd4(%rip),%rax        # 4031c0 &lt;_IO_stdin_used+0x1c0&gt;
  4014ec:	48 63 14 90          	movslq (%rax,%rdx,4),%rdx
  4014f0:	48 01 d0             	add    %rdx,%rax
  4014f3:	ff e0                	jmpq   *%rax
bb1:
  4014f5:	b8 00 00 00 00       	mov    $0x0,%eax
  4014fa:	eb 05                	jmp    401501 &lt;phase_3+0x50&gt;
bb0:
  4014fc:	b8 cb 02 00 00       	mov    $0x2cb,%eax
b2:
  401501:	2d 4c 02 00 00       	sub    $0x24c,%eax
  401506:	eb 05                	jmp    40150d &lt;phase_3+0x5c&gt;
bb2:
  401508:	b8 00 00 00 00       	mov    $0x0,%eax
b3:
  40150d:	05 ba 03 00 00       	add    $0x3ba,%eax
  401512:	eb 05                	jmp    401519 &lt;phase_3+0x68&gt;
bb3:
  401514:	b8 00 00 00 00       	mov    $0x0,%eax
b4:
  401519:	2d 79 03 00 00       	sub    $0x379,%eax
  40151e:	eb 05                	jmp    401525 &lt;phase_3+0x74&gt;
bb4:
  401520:	b8 00 00 00 00       	mov    $0x0,%eax
b5:
  401525:	05 79 03 00 00       	add    $0x379,%eax
  40152a:	eb 05                	jmp    401531 &lt;phase_3+0x80&gt;
bb5:
  40152c:	b8 00 00 00 00       	mov    $0x0,%eax
b6:
  401531:	2d 79 03 00 00       	sub    $0x379,%eax
  401536:	eb 05                	jmp    40153d &lt;phase_3+0x8c&gt;
bb6:
  401538:	b8 00 00 00 00       	mov    $0x0,%eax
b7:
  40153d:	05 79 03 00 00       	add    $0x379,%eax
  401542:	eb 05                	jmp    401549 &lt;phase_3+0x98&gt;
bb7:
  401544:	b8 00 00 00 00       	mov    $0x0,%eax
b8:
  401549:	2d 79 03 00 00       	sub    $0x379,%eax
  40154e:	eb 0a                	jmp    40155a &lt;phase_3+0xa9&gt;
b9:
  401550:	e8 07 06 00 00       	callq  401b5c &lt;explode_bomb&gt;
  401555:	b8 00 00 00 00       	mov    $0x0,%eax
b10:
  40155a:	83 7c 24 08 05       	cmpl   $0x5,0x8(%rsp)
  40155f:	7f 06                	jg     401567 &lt;phase_3+0xb6&gt;
  401561:	3b 44 24 0c          	cmp    0xc(%rsp),%eax
  401565:	74 05                	je     40156c &lt;phase_3+0xbb&gt;
b11:
  401567:	e8 f0 05 00 00       	callq  401b5c &lt;explode_bomb&gt;
b12:
  40156c:	48 83 c4 18          	add    $0x18,%rsp
  401570:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重新翻译为-c" tabindex="-1"><a class="header-anchor" href="#重新翻译为-c" aria-hidden="true">#</a> 重新翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_3</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token keyword">int</span> rsp<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 32-bit</span>
  rax <span class="token operator">=</span> <span class="token function">__isoc99_sscanf</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> <span class="token string">&quot;%d %d&quot;</span><span class="token punctuation">,</span> rsp <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> rsp <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b9<span class="token punctuation">;</span>
  <span class="token keyword">int</span> rdx <span class="token operator">=</span> rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>     <span class="token comment">// 32-bit</span>
  <span class="token keyword">int</span><span class="token operator">*</span> rax <span class="token operator">=</span> <span class="token number">0x4031c0</span><span class="token punctuation">;</span>  <span class="token comment">// 4031c0 &lt;_IO_stdin_used+0x1c0&gt;</span>
  rdx <span class="token operator">=</span> rax<span class="token punctuation">[</span>rdx<span class="token punctuation">]</span><span class="token punctuation">;</span>
  rax <span class="token operator">+=</span> rdx<span class="token punctuation">;</span>
  <span class="token function">jmpq</span><span class="token punctuation">(</span>rax<span class="token punctuation">)</span><span class="token punctuation">;</span>
bb1<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
bb0<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0x2cb</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b2<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x24c</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
bb2<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b3<span class="token operator">:</span>
  rax <span class="token operator">+=</span> <span class="token number">0x3ba</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b4<span class="token punctuation">;</span>
bb3<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b4<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b5<span class="token punctuation">;</span>
bb4<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b5<span class="token operator">:</span>
  rax <span class="token operator">+=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
bb5<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b6<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b7<span class="token punctuation">;</span>
bb6<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b7<span class="token operator">:</span>
  rax <span class="token operator">+=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b8<span class="token punctuation">;</span>
bb7<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b8<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b10<span class="token punctuation">;</span>
b9<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b10<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b11<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsp<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b12<span class="token punctuation">;</span>
b11<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b12<span class="token operator">:</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reverse-analysis" tabindex="-1"><a class="header-anchor" href="#reverse-analysis" aria-hidden="true">#</a> Reverse analysis</h2><p>逆向推导. 整个函数只有一处 <code>return</code> 位于 <code>b12</code> 中, 因此必须寻找到一条不会引发 <code>explode_bomb()</code> 的路径. 由于 <code>b11</code> 必然触发 <code>explode_bomb()</code>, 因此不能经过 <code>b11</code>, 而应通过 <code>jmp</code> 绕过 <code>b11</code> 到达 <code>b12</code>. 可通过 <code>jmp</code> 到达 <code>b12</code> 的 <code>BasicBlock</code> 有且仅有 <code>b10</code>, 且必须满足 <code>(rsp[2] &lt;= 5) &amp;&amp; (rax == rsp[3])</code>. 这意味着, 只有 <code>bb0</code>, <code>bb1</code>, <code>bb2</code>, <code>bb3</code>, <code>bb4</code>, <code>bb5</code> 是可以通过 <code>jmpq *%rax</code> 安全到达.</p><h2 id="删去无效的跳转点翻译为-c" tabindex="-1"><a class="header-anchor" href="#删去无效的跳转点翻译为-c" aria-hidden="true">#</a> 删去无效的跳转点翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_3</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  <span class="token keyword">int</span> rsp<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  rax <span class="token operator">=</span> <span class="token function">__isoc99_sscanf</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> <span class="token string">&quot;%d %d&quot;</span><span class="token punctuation">,</span> rsp <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> rsp <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b9<span class="token punctuation">;</span>
  <span class="token keyword">int</span> rdx <span class="token operator">=</span> rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>     <span class="token comment">// 32-bit</span>
  <span class="token keyword">int</span><span class="token operator">*</span> rax <span class="token operator">=</span> <span class="token number">0x4031c0</span><span class="token punctuation">;</span>  <span class="token comment">// 4031c0 &lt;_IO_stdin_used+0x1c0&gt;</span>
  rdx <span class="token operator">=</span> rax<span class="token punctuation">[</span>rdx<span class="token punctuation">]</span><span class="token punctuation">;</span>
  rax <span class="token operator">+=</span> rdx<span class="token punctuation">;</span>
  <span class="token function">jmpq</span><span class="token punctuation">(</span>rax<span class="token punctuation">)</span><span class="token punctuation">;</span>
bb1<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b2<span class="token punctuation">;</span>
bb0<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0x2cb</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b2<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x24c</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b3<span class="token punctuation">;</span>
bb2<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b3<span class="token operator">:</span>
  rax <span class="token operator">+=</span> <span class="token number">0x3ba</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b4<span class="token punctuation">;</span>
bb3<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b4<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b5<span class="token punctuation">;</span>
bb4<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b5<span class="token operator">:</span>
  rax <span class="token operator">+=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b6<span class="token punctuation">;</span>
bb5<span class="token operator">:</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b6<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b7<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b7<span class="token operator">:</span>
  rax <span class="token operator">+=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b8<span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b8<span class="token operator">:</span>
  rax <span class="token operator">-=</span> <span class="token number">0x379</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
  <span class="token keyword">goto</span> b10<span class="token punctuation">;</span>
b9<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 32-bit</span>
b10<span class="token operator">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rsp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">goto</span> b11<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> rsp<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b12<span class="token punctuation">;</span>
b11<span class="token operator">:</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b12<span class="token operator">:</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跳转图" tabindex="-1"><a class="header-anchor" href="#跳转图" aria-hidden="true">#</a> 跳转图</h2><p>去除必然触发 <code>explode_bomb</code> 的 <code>BasicBlock</code>, 可得如下跳转图:</p>`,17),l=n(`<h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><p>稍加分析不难发现, 沿着 <code>b0 --&gt; b1 --&gt; bb4 --&gt; b5 --&gt; b6 --&gt; b7 --&gt; b8 --&gt; b10</code> 恰好能够得到 <code>%rax == 0</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function d(r,u){const s=o("Mermaid");return e(),t("div",null,[i,p(s,{id:"mermaid-168",code:"eJxtks0KgzAQhO8+xeK1CJrEnxbsqW9RekiklB4KRaX4+I2ZxGRFb+M3mY2zTrOen7e3fo36U/xERvZx7yg3pqJRL9RTmZOeyGqOy4AXMRhvKZlFOEfhLGqAZTcDljiDY+noaQ2QRsMieQAsMYBjFW8g2zMsigfAEgM4rpMbhICaB8ASAzhuDm7QMEd7MKJlju4go3MOu4SiuJJfjd2YU6a80Dh97+JBvT3EWZWy3TmRMqxiYzJlaHljKmUocGN1ytDN+ms56EeEr/BSQPkZOymh/JCdVFBhCpc1FMpf15bKBgq925U45TvufMehyNC5yP6j/MUq"}),l])}const v=a(c,[["render",d],["__file","index.html.vue"]]);export{v as default};