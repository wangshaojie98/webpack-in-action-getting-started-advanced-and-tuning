console.log('page-a页面');

const btn = document.getElementById('btn')

btn.onclick = () => {
  console.log('发请求');
  const script = document.createElement('script');
  script.src = 'chunk.js'
  document.body.append(script)
}