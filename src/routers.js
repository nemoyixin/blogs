import DashBoard from './components/DashBoard'
import PersonalSpace from './components/PersonalSpace'
import ArticalNew from './components/ArticalNew'
import ArticalDetail from './components/ArticalDetail'

export default[
	{path:"/",component: DashBoard},
	{path:"/userspace",component: PersonalSpace},
	{path:"/artical/new",component: ArticalNew},
	{path:"/artical/detail",component: ArticalDetail}
]