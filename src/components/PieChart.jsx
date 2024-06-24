import { ResponsivePie } from "@nivo/pie";
import { token } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data} from "../data/mockData";

const PieChart = () =>{

    const theme = useTheme();
    const colors = token(theme.palette.mode);
return(
    <ResponsivePie
        data={data}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100]
                    },
                },
              legend: {
                text: {
                    fill: colors.grey[100],
                
                },
              },
              ticks:{
                line:{
                    stroke: colors.grey[100],
                    strokeWidth: 1,
                },
               }
              
            },
            legends:{
                text: {
                    fill: colors.grey[100]
                },
            },

        }}

        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        valueFormat=" >-"
        startAngle={-165}
        innerRadius={0.55}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextOffset={5}
        arcLinkLabelsTextColor="#eeeded"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsRadiusOffset={0.35}
        arcLabelsSkipAngle={12}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)
}
export default PieChart;