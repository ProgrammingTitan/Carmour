import React from 'react'
import AddVehicle from '../layout/AddVehicle'
import VehicleWidget from '../layout/VehicleWidget'

export default function MyVehiclesPage() {
    return (
        <div>
            <VehicleWidget />
            <AddVehicle />
        </div>
    )
}
