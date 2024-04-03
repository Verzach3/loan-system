import type {MetaFunction} from "@remix-run/node";
import {db} from "../../db/db.server";
import {useLoaderData} from "@remix-run/react";

export async function loader() {
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
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
            {loaderData && loaderData.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}
