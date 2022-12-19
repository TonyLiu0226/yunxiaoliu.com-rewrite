//nested routes: Specify route path as directories in pages folder
//then use []
import {useRouter} from 'next/router'

const article = () => {
    const router = useRouter();
    const {id} = router.query;
    return(
        <h3>This is article {id}</h3>
    )
}

//getserversideprops gets data upon request only

export default article