# BadApple
有屏幕的地方就有BadApple！！

- author bluesky335  ==>  [github](https://github.com/bluesky335/BadApple)
- rebuild by eggHead
- 优化，重构。



## 使用

- git clone ..this
- npm install
- npm test
- Open [`http://127.0.0.1:12450`](http://127.0.0.1:12450)



## 更新压缩算法

- 因为原作者是将动画每帧作为一个文件放在特定文件夹，然后前端页面打开通过轮询获取每帧的内容。但是这种方法首先请求太多。浪费资源效率低。将近6000多个文件对硬盘读写要求也很高。而且加起来接近100m的流量缓冲。就算gzip开启加载也需要长达10s以上
- 这里我根据字符画的重复内容写了一个合并打包的 merge.js 可以将所有帧文件打包并且压缩，最终文件在9Mb左右，相对原本大小缩小了90%，理论上还能压缩到更小，不过精力有限只写了一个简单的压缩方式。网速快基本是秒加载。
- test.js是我写着用来测试合并文件debug时用的。
