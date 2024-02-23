import { useEffect, useState } from "react"
import { getRewards } from "../../api/api"
import { Reward } from "../../types"
import { MenuList } from "@mui/material"

function Rewards() {
    const [rewards, setRewards] = useState<Reward[]>([])
    useEffect(() => {
        getRewards().then((data) => setRewards(data))
    }, [])
    return (
        <>
            <h1>Rewards page!</h1>
            {rewards.map(reward =>
                <MenuList>{reward.title}:  {reward.descriptioin}</MenuList>
            )}
        </>
    )
}
export default Rewards
