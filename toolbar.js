// toolbar.js
const toolbar = document.createElement('div');
toolbar.style.cssText = `
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ddd;
    z-index: 9999;
    font-family: Arial, sans-serif;
`;

toolbar.innerHTML = `
    <div style="text-align:center; cursor:pointer;" onclick="window.location.href='/'">
        <div style="background:#888; border-radius:20px; width:60px; height:30px; line-height:30px; color:black; font-weight:bold; margin:auto;">1</div>
        <div style="font-size:12px; margin-top:5px; font-weight:bold;">Page 1</div>
    </div>
    <div style="text-align:center; cursor:pointer;" onclick="window.location.href='/page2'">
        <div style="font-size:24px; color:black;">2</div>
        <div style="font-size:12px; margin-top:5px; font-weight:bold;">Page 2</div>
    </div>
`;

document.body.appendChild(toolbar);
// Add bottom padding to body so toolbar doesn't cover content
document.body.style.paddingBottom = '80px';
