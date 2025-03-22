import { CirclePlus } from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const Spaces = () => {
    return (
        <main>
            <section>
                <Card className='max-w-lg mx-auto'>
                    <CardHeader>
                        <CardTitle>
                            <div className='flex items-center gap-1'>
                                <CirclePlus className='h-5' />
                                Create space
                            </div>
                        </CardTitle>
                        <CardDescription>Modular Learning.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Name of your space" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="initial-thread">Initial thread name</Label>
                                    <Input id="initial-thread" placeholder='Name of your iniital thread'></Input>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Create</Button>
                    </CardFooter>
                </Card>
            </section>
            <ScrollArea className='lg:w-9/10 mx-auto w-full overflow-auto'>
                <section className="mt-5 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                    <Card className='space-card'>
                        <CardHeader>
                            <CardTitle>Space 1</CardTitle>
                            <CardDescription>Modular learning</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                            </p>
                        </CardContent>
                        <CardFooter>
                            <p>Creation Time</p>
                        </CardFooter>
                    </Card>
                    <Card className='space-card'>
                        <CardHeader>
                            <CardTitle>Space 2</CardTitle>
                            <CardDescription>Modular learning</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                            </p>
                        </CardContent>
                        <CardFooter>
                            <p>Creation Time</p>
                        </CardFooter>
                    </Card>
                    <Card className='space-card'>
                        <CardHeader>
                            <CardTitle>Space 1</CardTitle>
                            <CardDescription>Modular learning</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                            </p>
                        </CardContent>
                        <CardFooter>
                            <p>Creation Time</p>
                        </CardFooter>
                    </Card>
                    <Card className='space-card'>
                        <CardHeader>
                            <CardTitle>Space 2</CardTitle>
                            <CardDescription>Modular learning</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                            </p>
                        </CardContent>
                        <CardFooter>
                            <p>Creation Time</p>
                        </CardFooter>
                    </Card>
                    <Card className='space-card'>
                        <CardHeader>
                            <CardTitle>Space 1</CardTitle>
                            <CardDescription>Modular learning</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                            </p>
                        </CardContent>
                        <CardFooter>
                            <p>Creation Time</p>
                        </CardFooter>
                    </Card>
                </section>
                <ScrollBar />
            </ScrollArea>
        </main >
    )
}

export default Spaces