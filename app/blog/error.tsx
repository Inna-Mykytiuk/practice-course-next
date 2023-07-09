"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1 className="title">Oops...{error.message}</h1>;
}
