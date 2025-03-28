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
import { Link } from 'react-router'

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
            <section>
                <ScrollArea className='lg:w-9/10 mx-auto h-[calc(100vh-300px)] w-full pt-3 pb-20'>
                    <div className="mt-5 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                        <Link className='space-card' to='thread/physics'>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Physics</CardTitle>
                                    <CardDescription>Modular learning</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <p>28/03/25 at 1200</p>
                                </CardFooter>
                            </Card>
                        </Link>
                        <Card className='space-card'>
                            <CardHeader>
                                <CardTitle>Mathematics</CardTitle>
                                <CardDescription>Modular learning</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>28/03/25 at 1200</p>
                            </CardFooter>
                        </Card>
                        <Card className='space-card'>
                            <CardHeader>
                                <CardTitle>JavaScript</CardTitle>
                                <CardDescription>Modular learning</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>28/03/25 at 1200</p>
                            </CardFooter>
                        </Card>
                        <Card className='space-card'>
                            <CardHeader>
                                <CardTitle>Python</CardTitle>
                                <CardDescription>Modular learning</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>28/03/25 at 1200</p>
                            </CardFooter>
                        </Card>
                        <Card className='space-card'>
                            <CardHeader>
                                <CardTitle>Chemistry</CardTitle>
                                <CardDescription>Modular learning</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>28/03/25 at 1201</p>
                            </CardFooter>
                        </Card>
                        <Card className='space-card'>
                            <CardHeader>
                                <CardTitle>Literature</CardTitle>
                                <CardDescription>Modular learning</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>28/03/25 at 1201</p>
                            </CardFooter>
                        </Card>
                    </div>
                    <ScrollBar />
                </ScrollArea>
            </section>
        </main >
    )
}

export default Spaces