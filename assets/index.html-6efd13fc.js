const e=JSON.parse('{"key":"v-0683be4b","path":"/course-work/hpc/2022/03/21/exp2-mpi-allreduce/","title":"exp2: MPI Allreduce","lang":"en-US","frontmatter":{"lastUpdated":true,"contributors":true,"editLink":true,"category":["Course Work"],"tag":["Introduction to High Performance Computing","MPI"],"isOriginal":true,"date":"2022-03-21T00:00:00.000Z","permalinkPattern":"course-work/hpc/:year/:month/:day/:slug","title":"exp2: MPI Allreduce","description":"Ring Allreduce 算法 首先将每个结点的数据分为 comm_sz 个数据块, 每个数据块大小为 count = n / comm_sz 个 float. 第一阶段共 comm_sz - 1 步. 在第 k 步, 第 my_rank 个进程会将自己的第 (my_rank - k) % comm_sz 对应数据块发送给第 succ = my_rank + 1 个进程并累加. 注意到对于 my_rank 进程, 第 k 步的 Send 与 Recv 使用的数据块不同, 但第 k + 1 步的 Send 依赖于第 k 步的 Recv 得到的数据块. 因此 Send 可以是非阻塞的, 但 Recv 必须是阻塞的, 以确保在第 k + 1 步 Send 前, 第 k 步 Recv 已完成.","head":[["meta",{"property":"og:url","content":"https://blog.liblaf.me/course-work/hpc/2022/03/21/exp2-mpi-allreduce/"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"exp2: MPI Allreduce"}],["meta",{"property":"og:description","content":"Ring Allreduce 算法 首先将每个结点的数据分为 comm_sz 个数据块, 每个数据块大小为 count = n / comm_sz 个 float. 第一阶段共 comm_sz - 1 步. 在第 k 步, 第 my_rank 个进程会将自己的第 (my_rank - k) % comm_sz 对应数据块发送给第 succ = my_rank + 1 个进程并累加. 注意到对于 my_rank 进程, 第 k 步的 Send 与 Recv 使用的数据块不同, 但第 k + 1 步的 Send 依赖于第 k 步的 Recv 得到的数据块. 因此 Send 可以是非阻塞的, 但 Recv 必须是阻塞的, 以确保在第 k + 1 步 Send 前, 第 k 步 Recv 已完成."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-24T05:36:48.000Z"}],["meta",{"property":"article:tag","content":"Introduction to High Performance Computing"}],["meta",{"property":"article:tag","content":"MPI"}],["meta",{"property":"article:published_time","content":"2022-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-24T05:36:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"exp2: MPI Allreduce\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-24T05:36:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Ring Allreduce 算法","slug":"ring-allreduce-算法","link":"#ring-allreduce-算法","children":[]},{"level":2,"title":"通信时间","slug":"通信时间","link":"#通信时间","children":[]}],"git":{"createdTime":1677217008000,"updatedTime":1677217008000,"contributors":[{"name":"Qin Li","email":"liblaf@outlook.com","commits":1}]},"readingTime":{"minutes":1.48,"words":445},"filePathRelative":"course-work/hpc/2022-03-21-exp2-mpi-allreduce.md","localizedDate":"March 21, 2022","excerpt":"<h2> Ring Allreduce 算法</h2>\\n<p>首先将每个结点的数据分为 <code>comm_sz</code> 个数据块, 每个数据块大小为 <code>count = n / comm_sz</code> 个 <code>float</code>.</p>\\n<p>第一阶段共 <code>comm_sz - 1</code> 步. 在第 <code>k</code> 步, 第 <code>my_rank</code> 个进程会将自己的第 <code>(my_rank - k) % comm_sz</code> 对应数据块发送给第 <code>succ = my_rank + 1</code> 个进程并累加. 注意到对于 <code>my_rank</code> 进程, 第 <code>k</code> 步的 <code>Send</code> 与 <code>Recv</code> 使用的数据块不同, 但第 <code>k + 1</code> 步的 <code>Send</code> 依赖于第 <code>k</code> 步的 <code>Recv</code> 得到的数据块. 因此 <code>Send</code> 可以是非阻塞的, 但 <code>Recv</code> 必须是阻塞的, 以确保在第 <code>k + 1</code> 步 <code>Send</code> 前, 第 <code>k</code> 步 <code>Recv</code> 已完成.</p>","autoDesc":true}');export{e as data};