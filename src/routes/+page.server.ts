import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters"
import { fail, redirect } from "@sveltejs/kit";
import { formSchema } from "./schema.js";



export const load = async () => {
    return {
        form: await superValidate(zod(formSchema))
    }
};

export const actions = {
    default: async (event: any) => {
      const form = await superValidate(event, zod(formSchema));

      if (!form.valid) {
        return fail(400, {
          form,
        });
      }

      // make sure that form.data is username admin, password 123456

        if (form.data.username !== 'admin' || form.data.password !== '123456') {
            return fail(401, {
            form: {
                data: {
                username: 'admin',
                password: '123456',
                },
                errors: {
                username: 'Invalid username',
                password: 'Invalid password',
                },
                valid: false,
            },
            });
        }

        throw redirect( 308 ,'/orders',)
  
    },
  };