import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  animal: z
    .string()
    .min(3, { message: "Answer must be at least 3 characters long" }),
})

export default function IndexGame() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      animal: "",
    },
  })

  const onSubmit = form.handleSubmit((values) => {
    const animal = values.animal.toLowerCase()

    const message =
      animal.includes("cat") || animal.includes("kitten")
        ? "🎉🎉🎉 You guessed it! Meow! 🎉🎉🎉"
        : animal.includes("dog")
          ? "Close, but no cigar!"
          : animal.includes("dolphin")
            ? "Great guess, but no, equally playful though!"
            : animal.includes("shark")
              ? "No, but they're both predators"
              : animal.includes("hamster") ||
                  animal.includes("guinea pig") ||
                  animal.includes("rabbit")
                ? "No, but they're both small and cute"
                : "Try again!"

    toast({
      description: message,
    })
  })

  return (
    <div className='bg-gray-50 py-10 px-2'>
      <Card className='max-w-md mx-auto'>
        <CardHeader>
          <CardTitle>Guess the animal</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <FormField
                control={form.control}
                name='animal'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Animal</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter the cutest animal you can think of
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='mt-4'>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
