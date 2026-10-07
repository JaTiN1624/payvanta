import { useHealth } from "./useHealth";

export default function HealthPage(){

    const { data, isLoading, isError} = useHealth()

    return (
        <main className="mx-auto max-w-xl p-8">
            <h1 className="text-3xl font-bold">Payvanta</h1>
            <p className="mt-4 text-slate-600">Backend status:</p>
            {isLoading && <p>Checking…</p>}
            {isError && <p className="font-semibold text-red-600">Backend not reachable</p>}
            {data && <p className="font-semibold text-green-600">{data.status}</p>}
        </main>

    )
}