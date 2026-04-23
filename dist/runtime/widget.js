define([
  'jimu-core',
  'react'
], function (jimuCore, React) {

  const { React: JimuReact } = jimuCore;

  return class Widget extends React.PureComponent {

    render() {
      return JimuReact.createElement(
        'div',
        {
          style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px'
          }
        },
        'Hola mundo desde Experience Builder 👋'
      );
    }

  };

});
