import G6 from '@antv/g6';
export const initStyle = ({ primaryColor }) => {
    const colors = {
        blue: primaryColor,
        white: '#FFFFFF',
        head: primaryColor,
        black: 'black',
    };
    const style = {
        naviWidth: 370,
        default: {
            node: {
                fill: '#FFFFFF',
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowBlur: 10,
                shadowOffsetX: 0.5,
                shadowOffsetY: 0.5,
                radius: 10,
                // stroke: undefined,
                lineWidth: 4,
                opacity: 0.9,
                stroke: 'rgba(0,0,0,0.01)',
            },
            edge: {
                lineWidth: 2,
                size: 2,
                lineAppendWidth: 4,
                endArrow: {
                    path: G6.Arrow.triangleRect(10, 10, 10, 2, 4),
                },
                startArrow: {
                    path: G6.Arrow.circle(5, 5),
                    fill: 'rgba(11,108,149)',
                    shadowColor: 'rgba(0,0,0,0.1)',
                    opacity: 1,
                    d: 10
                },
                //  startArrow: {
                //   //  path: 'M 24,0 L -24,-12 L 8,0 L -24,12 Z',
                //   //  d: 2,
                //    fill: 'rgba(11,108,149)',
                //    shadowColor: 'rgba(0,0,0,0.1)',
                //   //  opacity: 1,
                //  },
                opacity: 0.2,
                radius: 5,
                labelCfg: {
                    autoRotate: true,
                    style: {
                        fontSize: 34,
                    },
                },
                stroke: 'rgba(11,108,149)',
            },
        },
        selected: {
            node: {
                stroke: 'rgba(11,108,149)',
                shadowColor: 'rgba(11,108,149)',
            },
        },
        isNoModule: {
            node: {
                opacity: 0.2,
            },
        },
    };
    return {
        colors,
        style,
    };
};
