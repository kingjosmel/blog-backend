import { Controller, Param, Post } from '@nestjs/common';
import { PostService } from './providers/post.service';

@Controller('posts')
export class PostController {
    constructor(
        private readonly postService : PostService
    ){}

    @Post('/:id')
    public getpost(@Param('userId') userId: string) {
        return this.postService.findAll(userId)
    }
}
