function makePwdToggler(pwd)
{
    var button = document.createElement('button');
    button.setAttribute('class', 'showPassword');
    button.setAttribute('aria-label', 'Password toggle');
    button.setAttribute('type', 'button');
    var id = pwd.id + 'toggler';
    button.setAttribute('id', id);
    pwd.insertAdjacentElement('afterend', button);

    function toggle()
    {
        if (pwd.type === 'password')
        {
            pwd.type = 'text';
            button.setAttribute('class', 'hidePassword');
        } else
        {
            pwd.type = 'password';
            button.setAttribute('class', 'showPassword');
        }
    }

    button.onclick = toggle;
}

function setupPwdTogglers()
{
    var pwdInputs = document.querySelectorAll('input[type=password]');

    for (var i = 0; i < pwdInputs.length; i++)
    {
        makePwdToggler(pwdInputs[i]);
    }
}

setupPwdTogglers();