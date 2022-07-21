import { Button, Swipe, SwipeItem,Skeleton,Popup,Search } from 'vant';

// 引入的组件放入数组中
let plugins = [
    Button, Swipe, SwipeItem,Skeleton,Popup,Search
];

export default function getVant(app: any) {
    plugins.forEach((item: any) => {
        return app.use(item);
    });
}
