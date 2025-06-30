import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="h-screen flex bg-background text-foreground">

      <aside className="w-[250px] border-r border-border px-4 py-6 text-sm space-y-6 sticky top-0 h-screen overflow-y-auto ">
        <div className="fixed top-20 left-5">
          <div>
            <h4 className="font-bold mb-2">Get Started</h4>
            <ul className="space-y-1">
              <li>Introduction</li>
              <li>Installation</li>
              <li>components.json</li>
              <li>Theming</li>
              <li>Dark Mode</li>
              <li>CLI</li>
              <li>Monorepo</li>
              <li>Open in v0</li>
              <li>JavaScript</li>
              <li>Blocks</li>
              <li>Figma</li>
              <li>Changelog</li>
              <li>Legacy Docs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Components</h4>
            <ul className="space-y-1">
              <li>Accordion</li>
              <li>Alert</li>
              <li>Alert Dialog</li>
              <li>Aspect Ratio</li>
              <li>Avatar</li>
              <li>Badge</li>
            </ul>
          </div>
        </div>
      </aside>

      <main className="flex-1 h-screen overflow-y-scroll px-10 py-10">
        <h1 className="text-4xl font-bold mb-2">Next.js</h1>
        <p className="text-muted-foreground mb-6">
          Install and configure shadcn/ui for Next.js.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Create project</h2>
          <p className="mb-2">
            Run the <code className="bg-muted p-1 rounded">init</code> command to
            create a new Next.js project or to setup an existing one:
          </p>
          <CodeBlock code="sdsd" />
          <div className="flex gap-5 py-2 relative">
            <Button variant={"outline"}>pnpm</Button>
            <Button variant={"outline"}>npm</Button>
            <Button variant={"outline"}>yarn</Button>
            <Button variant={"outline"}>bun</Button>
            <code className=" absolute right-5">|=|</code>
          </div>
          <CodeBlock code="npx shadcn@latest init" />
          <p>Choose between a Next.js project or a Monorepo.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Add Components</h2>
          <p className="mb-2">
            You can now start adding components to your project:
          </p>
          <CodeBlock code="npx shadcn@latest add button" />
          <p className="my-5">
            The command above will add the <code className="bg-muted p-1 rounded">Button</code> component to your
            project. You can then import it like this:
          </p>
          <CodeBlock
            code={`import { Button } from "@/components/ui/button";

export default function Home() {
  return <Button>Click me</Button>
}`}
          />
        </section>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eveniet consequatur. Consequatur id quaerat voluptates sit dolores similique praesentium dolore libero quae voluptatum reiciendis atque officia neque, fugiat tenetur cumque eveniet illo totam numquam? Officiis assumenda dicta totam eius, ab quaerat perferendis deleniti dolorem explicabo vero, reiciendis asperiores quibusdam ullam dolorum dolorem. Maxime corrupti ipsa omnis aliquam minus dolor aut quia officiis facilis sequi. Est sapiente atque illum optio totam voluptatum illo molestiae, placeat ipsam, voluptates asperiores porro pariatur sunt! Asperiores nam doloremque natus vel, placeat a, exercitationem sequi fuga nemo tempore mollitia nulla odit. Harum, fugiat ea voluptate modi delectus mollitia molestiae maiores distinctio nemo, velit, ratione illo molestias! Laborum libero, enim, reiciendis doloribus fuga voluptas quia illo commodi nulla quidem consectetur sint aliquam soluta modi eveniet vero ducimus placeat corporis praesentium. Illo explicabo culpa obcaecati. Totam, omnis doloremque? Qui repellat ullam nobis? Modi vero, recusandae fuga quae libero illum officiis culpa quibusdam esse nesciunt impedit at enim maiores voluptatibus, ullam consectetur quas laudantium alias pariatur est, optio incidunt. Sunt necessitatibus atque fugit voluptatum totam asperiores repudiandae laboriosam natus delectus obcaecati, a facilis veniam iusto eos repellendus suscipit id voluptate dicta nihil? Maiores, cumque facilis eveniet nam enim magni expedita nostrum eos autem cupiditate distinctio, eligendi omnis rem minus beatae sequi pariatur unde error temporibus, quas ducimus similique. Molestias necessitatibus cupiditate corporis voluptate ullam cum earum dolorem atque delectus distinctio provident suscipit minima derit nam ipsam optio minima ut voluptate repellendus facilis quod sed sit reiciendis.
        </div>
      </main>

      <div className="w-[350px] px-4 py-6 border-l border-border  h-screen overflow-y-auto">
        <div className="fixed right-5 top-20 w-[300px]">
          <div className="bg-muted p-4 rounded-xl">
            <h4 className="font-semibold mb-2 text-sm">Deploy your shadcn/ui app on Vercel</h4>
            <p className="text-sm mb-4">
              Trusted by OpenAI, Sonos, Adobe, and more. Vercel provides tools and
              infrastructure to deploy apps and features at scale.
            </p>
            <Button>Deploy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarContent() {
  return (
    <>
      <div>
        <h4 className="font-bold mb-2">Get Started</h4>
        <ul className="space-y-1">
          <li>Introduction</li>
          <li>Installation</li>
          <li>components.json</li>
          <li>Theming</li>
          <li>Dark Mode</li>
          <li>CLI</li>
          <li>Monorepo</li>
          <li>Open in v0</li>
          <li>JavaScript</li>
          <li>Blocks</li>
          <li>Figma</li>
          <li>Changelog</li>
          <li>Legacy Docs</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Components</h4>
        <ul className="space-y-1">
          <li>Accordion</li>
          <li>Alert</li>
          <li>Alert Dialog</li>
          <li>Aspect Ratio</li>
          <li>Avatar</li>
          <li>Badge</li>
        </ul>
      </div>
    </>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-muted rounded p-4 overflow-x-auto mb-4">
      <code className="text-sm font-mono whitespace-pre-wrap">{code}</code>
    </pre>
  );
}
