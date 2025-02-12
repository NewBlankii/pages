import { reactive, onMounted } from "vue";
import axios, { AxiosError } from "axios";

export default function () {
    let dogList = reactive<string[]>([])

    async function getDog() {
        try {
            let {data}= await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(data.message)
            console.log(data.message)
        }
        catch (error) {
            const err = <AxiosError>error
            console.log(err.message)
        }

    }
    // 挂载钩子
    // onMounted(() => {
    //     getDog()
    // })

    return { dogList, getDog }
}