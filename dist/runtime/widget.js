define([
  'jimu-core',
  'jimu-core/react',
  'jimu-ui'
], function (jimuCore, React, jimuUI) {

  const { React: JimuReact } = jimuCore;
  const { Button } = jimuUI;

  return class Widget extends React.PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    onClick = () => {
      this.setState({
        count: this.state.count + 1
      });
    };

    render() {
      return JimuReact.createElement(
        'div',
        {
          style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
          }
        },

        // 👋 TEXTO PRINCIPAL
        JimuReact.createElement(
          'h2',
          null,
          'Hola mundo desde Experience Builder 👋'
        ),

        // 🔢 CONTADOR
        JimuReact.createElement(
          'p',
          null,
          'Clicks: ' + this.state.count
        ),

        // 🔘 BOTÓN UI de jimu-ui
        JimuReact.createElement(
          Button,
          {
            onClick: this.onClick,
            type: 'primary'
          },
          'Incrementar'
        )
      );
    }
  };

});
