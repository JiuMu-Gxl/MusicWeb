import { Button, Swipe, SwipeItem,Skeleton } from 'vant';
// 引入的组件放入数组中
let plugins = [
    Button, Swipe, SwipeItem,Skeleton 
];

export default function getVant(app: any) {
    plugins.forEach((item: any) => {
        return app.use(item);
    });
}
