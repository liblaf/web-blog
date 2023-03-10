import{_ as a,X as n,Y as t,a1 as s}from"./framework-9435e890.js";const e={},d=s(`<h2 id="分析-test-gmem-cu-的性能变化来源" tabindex="-1"><a class="header-anchor" href="#分析-test-gmem-cu-的性能变化来源" aria-hidden="true">#</a> 分析 <code>test_gmem.cu</code> 的性能变化来源</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>__global__ <span class="token keyword">void</span> <span class="token function">stride_copy</span><span class="token punctuation">(</span><span class="token keyword">float</span> <span class="token operator">*</span>dst<span class="token punctuation">,</span> <span class="token keyword">float</span> <span class="token operator">*</span>src<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i <span class="token operator">=</span> blockIdx<span class="token punctuation">.</span>x <span class="token operator">*</span> blockDim<span class="token punctuation">.</span>x <span class="token operator">+</span> threadIdx<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
  dst<span class="token punctuation">[</span>i <span class="token operator">*</span> STRIDE<span class="token punctuation">]</span> <span class="token operator">=</span> src<span class="token punctuation">[</span>i <span class="token operator">*</span> STRIDE<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://res.cloudinary.com/liblaf/image/upload/v1677215353/2023/02/24/20230224-1677215350.png" alt="Global Memory" tabindex="0" loading="lazy"><figcaption>Global Memory</figcaption></figure><h3 id="性能变化的主要来源是-gpu-的哪种机制引起的" tabindex="-1"><a class="header-anchor" href="#性能变化的主要来源是-gpu-的哪种机制引起的" aria-hidden="true">#</a> 性能变化的主要来源是 GPU 的哪种机制引起的？</h3><p>访存合并机制.</p><h3 id="这种机制如何影响该程序的性能" tabindex="-1"><a class="header-anchor" href="#这种机制如何影响该程序的性能" aria-hidden="true">#</a> 这种机制如何影响该程序的性能？</h3><p>在 DRAM, L2 cache, L1 cache 之间传输数据的最小单元为 1 sector = 32 Bytes. DRAM 访问总量为 <code>size * STRIDE * sizeof(float)</code> 与 <code>STRIDE</code> 成正比. 因此 <code>STRIDE</code> 越大, 程序访问的 transaction 个数越多, 且近似呈正比, 导致性能反比下降.</p><h3 id="是否有其他的硬件功能参与了该程序的执行过程-它们会如何影响该程序的执行效率" tabindex="-1"><a class="header-anchor" href="#是否有其他的硬件功能参与了该程序的执行过程-它们会如何影响该程序的执行效率" aria-hidden="true">#</a> 是否有其他的硬件功能参与了该程序的执行过程, 它们会如何影响该程序的执行效率？</h3><p>cache. 顺序访问时, 数据会被缓存在 cache 中, 从而减少对 DRAM 的直接访问, 提升性能.</p><h2 id="分析-test-smem-cu-的性能变化来源" tabindex="-1"><a class="header-anchor" href="#分析-test-smem-cu-的性能变化来源" aria-hidden="true">#</a> 分析 <code>test_smem.cu</code> 的性能变化来源</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>__global__ <span class="token keyword">void</span> <span class="token function">test_shmem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token punctuation">(</span>BITWIDTH <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span></span></span>
  <span class="token keyword">volatile</span> __shared__ <span class="token keyword">uint16_t</span> shm<span class="token punctuation">[</span><span class="token number">32</span> <span class="token operator">*</span> <span class="token number">128</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">volatile</span> <span class="token keyword">uint16_t</span> tmp<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">elif</span> <span class="token expression"><span class="token punctuation">(</span>BITWIDTH <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span></span></span>
  <span class="token keyword">volatile</span> __shared__ <span class="token keyword">uint32_t</span> shm<span class="token punctuation">[</span><span class="token number">32</span> <span class="token operator">*</span> <span class="token number">128</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">volatile</span> <span class="token keyword">uint32_t</span> tmp<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">elif</span> <span class="token expression"><span class="token punctuation">(</span>BITWIDTH <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span></span></span>
  <span class="token keyword">volatile</span> __shared__ <span class="token keyword">uint64_t</span> shm<span class="token punctuation">[</span><span class="token number">32</span> <span class="token operator">*</span> <span class="token number">128</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">volatile</span> <span class="token keyword">uint64_t</span> tmp<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> times<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tmp <span class="token operator">=</span> shm<span class="token punctuation">[</span>threadIdx<span class="token punctuation">.</span>x <span class="token operator">*</span> STRIDE<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://res.cloudinary.com/liblaf/image/upload/v1677215375/2023/02/24/20230224-1677215373.png" alt="Shared Memory" tabindex="0" loading="lazy"><figcaption>Shared Memory</figcaption></figure><h3 id="固定-bitwidth-时-程序的性能变化来源于哪种硬件机制" tabindex="-1"><a class="header-anchor" href="#固定-bitwidth-时-程序的性能变化来源于哪种硬件机制" aria-hidden="true">#</a> 固定 <code>BITWIDTH</code> 时, 程序的性能变化来源于哪种硬件机制？</h3><p>bank conflict.</p><h3 id="bitwidth-设置为-2-8-时性能变化的趋势相比于-bitwidth-设置为-4-时有什么不同之处-请解释" tabindex="-1"><a class="header-anchor" href="#bitwidth-设置为-2-8-时性能变化的趋势相比于-bitwidth-设置为-4-时有什么不同之处-请解释" aria-hidden="true">#</a> <code>BITWIDTH</code> 设置为 2,8 时性能变化的趋势相比于 <code>BITWIDTH</code> 设置为 4 时有什么不同之处, 请解释.</h3><p><code>BITWIDTH</code> 设置为 4 时, bandwidth 随着 <code>STRIDE</code> 的增大而减小. <code>BITWIDTH</code> 设置为 2 时, <code>STRIDE</code> 为 1 和 2 时 bandwidth 几乎相等, 而后变化趋势与 <code>BITWIDTH</code> 设置为 4 时基本相同. <code>BITWIDTH</code> 设置为 8 时, <code>STRIDE</code> 为 16 和 32 时 bandwidth 几乎相等, 在这之前的变化趋势与 <code>BITWIDTH</code> 设置为 4 时基本相同.</p><p>当 <code>BITWIDTH</code> 为 4 时, 访存粒度为 4 Bytes = 1 bank, 相邻两个 thread 访问地址间隔为 <code>STRIDE</code> 个 bank. 当 <code>STRIDE</code> 为 1 时, 同一 wrap 内的 32 个 thread 访问了第一行内的 32 个 bank, 不存在 bank conflict. 当 <code>STRIDE</code> 为 2 时, <code>threadIdx.x</code> 与 <code>threadIdx.x + 16</code> 访问同一 bank, 发生 2-way bank conflict. 当 <code>STRIDE</code> 为 4 时, <code>threadIdx.x</code>, <code>threadIdx.x + 8</code>, <code>threadIdx.x + 16</code>, <code>threadIdx.x + 24</code> 访问同一个 bank, 发生 4-way bank conflict. 类似的, <code>STRIDE</code> 为 8 和 16 时分别发生 8-way bank conflict 和 16-way bank conflict.</p><p>当 <code>BITWIDTH</code> 为 2, <code>STRIDE</code> 为 1 时, 相邻两个 thread 访问同一个 bank, 发生 2-way bank conflict, 共访问 16 个 bank. 而 <code>STRIDE</code> 为 2 时, 虽然没有 bank conflict, 但需要访问 32 个 bank. 但由于每次访问仅使用 0.5 bank, 带宽为理论峰值的一半. 因此 <code>STRIDE</code> 为 1 或 2 时性能相近.</p><p>当 <code>BITWIDTH</code> 为 8, <code>STIRDE</code> 为 16 时, 相邻两个 thread 访存地址间隔为 128 Bytes, 恰为一行. 这意味着, 所有 thread 都访问 bank-0 和 bank-1, 发生 32-way bank conflict. 而当 <code>STRIDE</code> 为 32 时, 相邻两个 thread 访存地址间隔为 256 Bytes, 为两行, 此时所有 thread 仍都访问 bank-0 和 bank-1, 发生 32-way bank conflict. 因此 <code>STRIDE</code> 为 16 或 32 时性能相近.</p><h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h2><h3 id="global-memory" tabindex="-1"><a class="header-anchor" href="#global-memory" aria-hidden="true">#</a> Global Memory</h3><table><thead><tr><th>Stride</th><th>Bandwidth (GB/s)</th></tr></thead><tbody><tr><td>1</td><td>530.015</td></tr><tr><td>2</td><td>182.471</td></tr><tr><td>4</td><td>91.9932</td></tr><tr><td>8</td><td>46.2866</td></tr></tbody></table><h3 id="shared-memory" tabindex="-1"><a class="header-anchor" href="#shared-memory" aria-hidden="true">#</a> Shared Memory</h3><table><thead><tr><th>Bitwidth</th><th>Stride</th><th>Bandwidth (GB/s)</th></tr></thead><tbody><tr><td>2</td><td>1</td><td>4258.05</td></tr><tr><td>2</td><td>2</td><td>4270.88</td></tr><tr><td>2</td><td>4</td><td>2149.69</td></tr><tr><td>2</td><td>8</td><td>831.405</td></tr><tr><td>2</td><td>16</td><td>427.135</td></tr><tr><td>2</td><td>32</td><td>215.022</td></tr><tr><td>4</td><td>1</td><td>8607.33</td></tr><tr><td>4</td><td>2</td><td>4315.77</td></tr><tr><td>4</td><td>4</td><td>2027.46</td></tr><tr><td>4</td><td>8</td><td>1012.86</td></tr><tr><td>4</td><td>16</td><td>504.37</td></tr><tr><td>4</td><td>32</td><td>251.766</td></tr><tr><td>8</td><td>1</td><td>8657.57</td></tr><tr><td>8</td><td>2</td><td>4339.44</td></tr><tr><td>8</td><td>4</td><td>2173.55</td></tr><tr><td>8</td><td>8</td><td>1087.65</td></tr><tr><td>8</td><td>16</td><td>544.069</td></tr><tr><td>8</td><td>32</td><td>544.068</td></tr></tbody></table>`,24),o=[d];function c(p,r){return n(),t("div",null,o)}const l=a(e,[["render",c],["__file","index.html.vue"]]);export{l as default};