import {json, MetaFunction} from "@remix-run/node";
import {db} from "../../db/db.server";
import {useLoaderData, useRevalidator} from "@remix-run/react";

export async function loader() {
    console.log("Servidor")
    return db.query.users.findMany();
}

export const meta: MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    const loaderData = useLoaderData<typeof loader>();
    const revalidator = useRevalidator();
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
            {loaderData && loaderData.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
            <button onClick={() => revalidator.revalidate()}>
                revalidar
            </button>
        </div>
    );
}
