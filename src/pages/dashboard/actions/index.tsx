import type { FC } from 'react'
import DashboardForm from '~/components/Forms/DashboardForm'
import Dashboard from '..'
import React from 'react'
import UpdateForm from '~/components/Forms/UpdateForm'

const ActionPage: FC = () => {
    const [tab, setTab] = React.useState<boolean>(false)
    return (
        <Dashboard>
            <div className="tabs flex justify-center items-center">
                <a onClick={() => setTab(!tab)} className={`tab tab-lifted ${!tab && "tab-active"}`}>Add</a>
                <a onClick={() => setTab(!tab)} className={`tab tab-lifted ${tab && "tab-active"}`}>Update</a>
            </div>
            {!tab ? (
                <DashboardForm />
            ) :
                <UpdateForm />}
        </Dashboard>
    )
}

export default ActionPage