import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { GetShopsDto, ShopPaginator } from './dto/get-shops.dto';
import { GetStaffsDto } from './dto/get-staffs.dto';
import { UserPaginator } from 'src/users/dto/get-users.dto';

@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Post()
  create(@Body() createShopDto: CreateShopDto) {
    console.log("shop create shop")

    return this.shopsService.create(createShopDto);
  }

  @Get()
  async getShops(@Query() query: GetShopsDto): Promise<ShopPaginator> {
    console.log("shop get Shops")

    return this.shopsService.getShops(query);
  }

  @Get(':slug')
  async getShop(@Param('slug') slug: string) {
    console.log("shop get Shop")

    return this.shopsService.getShop(slug);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
    console.log("shop update")

    return this.shopsService.update(+id, updateShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log("shop remove")

    return this.shopsService.remove(+id);
  }

  @Post('approve')
  approveShop(@Param('id') id: string) {
    console.log("shop Approve-1*",id)

    return this.shopsService.approve(+id);
  }

  @Post('disapprove')
  disapproveShop(@Param('id') id: string) {
    console.log("shop disApprove-1*")

    return this.shopsService.approve(+id);
  }
}

@Controller('staffs')
export class StaffsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Post()
  create(@Body() createShopDto: CreateShopDto) {
    console.log("staff create")

    return this.shopsService.create(createShopDto);
  }

  @Get()
  async getStaffs(@Query() query: GetStaffsDto): Promise<UserPaginator> {
    console.log("staff get Staff member")

    return this.shopsService.getStaffs(query);
  }

  @Get(':slug')
  async getShop(@Param('slug') slug: string) {
    console.log("staff get Shop")

    return this.shopsService.getShop(slug);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
    console.log("staff update")

    return this.shopsService.update(+id, updateShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log("staff remove")

    return this.shopsService.remove(+id);
  }
}

@Controller('disapprove-shop')
export class DisapproveShopController {
  constructor(private shopsService: ShopsService) {}

  @Post()
  async disapproveShop(@Body('id') id) {
    console.log("DisApprove Shop-2**")

    return this.shopsService.disapproveShop(id);
  }
}

@Controller('approve-shop')
export class ApproveShopController {
  constructor(private shopsService: ShopsService) {}

  @Post()
  async approveShop(@Body('id') id) {
    console.log("Approve Shop-2**")
    return this.shopsService.approveShop(id);
  }
}
